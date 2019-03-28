import {Game} from './game';
import {Player} from './player';
import {log} from 'util';

enum BlockType {
  coin = 1,
  bomb = 2,
  wall = 3,
  goal = 4,
  question = 5,
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
   * @param blockType The type of the block.
   * @param game The current game session where the reactions take place.
   */
  public reaction(block: string, game: Game) {
    const blockType = BlockType[block];

    log('Impacted with this class: ' + block);

    if (blockType === 1) {
      game.getPlayer().addScore(10);
    }

    if (blockType === 2) {
      if (game.getPlayer().getLives() <= 0) {
        alert('Game over');
        game.endGame();
      }
      game.getPlayer().takeLife();
      game.reset();
      alert('Boom! The board has been reset!');
    }

    if (blockType === 4) {
      game.increaseLevel();
      alert('You\'ve hit the goal! Advancing to the next level!');
      // TODO: Handle the situation where the player has cleared the last available level.
    }

    if (blockType === 5) {
      const randomType = Block.getRandomInt(1, 3);
      this.reaction(BlockType[randomType], game);
      alert('Randomized to a...' + BlockType[randomType] + '!');
    }
  }

  public setType(blockType: BlockType) {
    this.type = blockType;
  }
}
