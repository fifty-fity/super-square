import {Game} from './game';
import {Player} from './player';

enum BlockType {
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
   * @param blockType The type of the block.
   * @param game The current game session where the reactions take place.
   */
  public reaction(blockType: BlockType, game: Game) {
    // Various reactions depending on the block type.
    //coin block
    if (blockType === 1) {
      var player:Player = game.getPlayer();
      var score:number = player.getScore();
      score = player.addScore(10);
      player.setScore(score);

    }
    //bomb block
    if (blockType === 2) {
      var player:Player = game.getPlayer();
      var playerLives:number = player.getLives();
      playerLives = playerLives - 1;
      player.setLives(playerLives);
    }
    //goal block
    if (blockType === 4) {
      game.increaseLevel();
    }
    //random block
    if (blockType === 5) {
      const randomType = Block.getRandomInt(1, 5);
    }
  }
  public setType(blockType:BlockType) {
    this.type = blockType;
  }
}
