import {Player} from './player';
import { Block } from './block';

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
  public getPlayer(): Player {
    return this.sessionPlayer;
  }

  public spawn(block: Block) {
    block.setType(6);
  }

  public startGame() {

  }

  public endGame() {
    alert("The game ended");
    this.currentLevel = 1;
    this.sessionPlayer.setScore(0);
    this.sessionPlayer.setLives(3);

  }

  public getLevel(): number {
    return this.currentLevel;
  }

  public updateLives() {
    this.sessionPlayer.loseLife();
  }

  public updateScore(score: number) {
    this.sessionPlayer.addScore(score);
  }

  public frame(evt: KeyboardEvent) {
    window.addEventListener("keydown", function (event) {
      if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
      }

      switch (event.key) {
        case "ArrowDown":
          // Do something for "down arrow" key press.
          alert("arrowDown");
          break;
        case "ArrowUp":
          // Do something for "up arrow" key press.
          alert("arrowUp");
          break;
        case "ArrowLeft":
          // Do something for "left arrow" key press.
          alert("arrowLeft");
          break;
        case "ArrowRight":
          // Do something for "right arrow" key press.
          alert("ArrowRight");
          break;

        default:
          return; // Quit when this doesn't handle the key event.
      }

      // Cancel the default action to avoid it being handled twice
      event.preventDefault();
    }, true)
  }
}
