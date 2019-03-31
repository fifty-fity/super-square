import { Game } from './game';
import * as gameStrings from '../../assets/resources/strings.json';

export enum BlockType {
  void = 0,
  coin = 1,
  bomb = 2,
  wall = 3,
  goal = 4,
  random = 5,
  player = 6
}

export class Block {

  private type: BlockType;
  /**
   * Generates a random number, given two numbers.
   * @param floor - The minimum/starting number.
   * @param ceiling - The maximum/last number.
   */
  static getRandomInt(floor: number, ceiling: number): number {
    return Math.floor(Math.random() * (ceiling - floor)) + floor;
  }

  /**
   * Reactions for each block type.
   * @param block The block we want to react to.
   * @param game The current game session where the reactions take place.
   */
  public reaction(block: string, game: Game) {
    const blockType = BlockType[block];
    if (blockType === BlockType.coin) {
      game.getPlayer().addScore(10);
    }

    if (blockType === BlockType.bomb) {
      if (game.getPlayer().getLives() <= 0) {
        alert(gameStrings.dialogs.gameOver);
        game.getScoreList().addToScoreList(game.getPlayer());
        game.endGame();
        return;
      }
      alert(gameStrings.dialogs.bomb);
      game.getPlayer().takeLife();
      game.getPlayer().addScore(-25);
      game.reset();
    }

    if (blockType === BlockType.goal) {
      alert(gameStrings.dialogs.goal);
      if (game.getLevel() === game.getMaxLevels()) {
        game.getScoreList().addToScoreList(game.getPlayer());
        alert(gameStrings.dialogs.victory);
        game.endGame();
        return;
      }
      game.increaseLevel();
    }

    if (blockType === BlockType.random) {
      const randomType = Block.getRandomInt(1, 3);
      alert(gameStrings.dialogs.question + ' ' + BlockType[randomType] + '!');
      this.reaction(BlockType[randomType], game);
    }
  }

  public setType(blockType: BlockType) {
    this.type = blockType;
  }

  public getType() {
    return this.type;
  }
}
