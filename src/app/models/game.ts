import {Player} from './player';

export class Game {
  private currentLevel: number;
  private sessionPlayer: Player;

  constructor(player: Player) {
    this.currentLevel = 1;
    this.sessionPlayer = player;
  }

  /**
   * Increases the game's level to the next one. This should call and refresh the grid for the next level, also handle spawning.
   */
  public increaseLevel() {
    this.currentLevel++;
  }

// Getters and setters.
  public get player(): Player {
    return this.sessionPlayer;
  }
}
