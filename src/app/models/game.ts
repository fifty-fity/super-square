import {Player} from './player';
import { Block } from './block';
import { LevelHandler } from './level-handler';

enum MovementDirection {
  up = -10,
  right = 1,
  down = 10,
  left = -1
}

export class Game {
  private sessionLevel: number;
  private sessionPlayer: Player;
  private sessionLevelHandler: LevelHandler;

  private imgPlayer = 'assets/images/player.png';
  private imgVoid = 'assets/images/void.png';

  constructor(player: Player) {
    this.sessionLevel = 1;
    this.sessionPlayer = player;
  }

  /**
   * Increases the game's level to the next one. This should call and refresh the grid for the next level, also handle spawning.
   */
  public increaseLevel() {
    this.sessionLevel++;
    this.getLevelHandler().loadLevel(this.sessionLevel);
    this.reset();
  }

// Getters and setters.
  public getPlayer(): Player {
    return this.sessionPlayer;
  }

  public getLevel(): number {
    return this.sessionLevel;
  }

  public getLevelHandler(): LevelHandler {
    return this.sessionLevelHandler;
  }

  public setLevel(level: number) {
    this.sessionLevel = level;
  }

// Methods
  public spawn(block: Block) {
    block.setType(6);
  }

  public endGame() {
    this.sessionPlayer.setScore(0);
    this.sessionPlayer.setLives(3);
    this.setLevel(1);
  }

  /**
   * Should reset the game's board.
   */
  public reset() {
    this.sessionPlayer.setScore(0);
    this.getLevelHandler().spawnBoard(this.getLevelHandler().loadLevel(this.getLevel()));
    // TODO: Reset should also clear up everything. Currently board spawns at the bottom.
  }

  public frame(playerObj: Player, levelHandler: LevelHandler) {
    const self = this;
    this.sessionLevelHandler = levelHandler;

    window.addEventListener('keydown',  (event) => {
      if (event.defaultPrevented) {
        return;
      }

      switch (event.key) {
        case 'ArrowDown':
          self.move(MovementDirection.down);
          break;
        case 'ArrowUp':
          self.move(MovementDirection.up);
          break;
        case 'ArrowLeft':
          self.move(MovementDirection.left);
          break;
        case 'ArrowRight':
          self.move(MovementDirection.right);
          // self.right(playerObj, levelHandler);
          break;

        default: return; // Quit when this doesn't handle the key event
      }

      // Cancel the default action to avoid it being handled twice
      event.preventDefault();
    }, true);
  }

  /**
   * Handles Super Square's movement
   * @param movementDirection The given direction that the player is trying to go to.
   */
  private move(movementDirection: MovementDirection) {
    let playerDOMElement = document.getElementsByClassName('player')[0];
    const playerDOMElementId = playerDOMElement.parentElement.getAttribute('id');
    let targetBlockId = Number(playerDOMElementId) + movementDirection;

    if (document.getElementById(String(targetBlockId)).firstChild == null) {
      return;
    }

    let targetBlockElement = document.getElementById(String(targetBlockId)).firstChild as HTMLElement;
    let targetBlockElementClass = targetBlockElement.getAttribute('class');

    while (targetBlockElementClass !== 'wall') {
      targetBlockElement.setAttribute('class', 'player');

      const targetBlockImageElement = targetBlockElement.firstChild as HTMLElement;
      targetBlockImageElement.setAttribute('src', this.imgPlayer);

      playerDOMElement.setAttribute('class', 'void');
      const playerImageElement = playerDOMElement.firstChild as HTMLElement;
      playerImageElement.setAttribute('src', this.imgVoid);

      new Block().reaction(targetBlockElementClass, this);

      targetBlockId += movementDirection;
      targetBlockElement = document.getElementById(String(targetBlockId)).firstChild as HTMLElement;
      targetBlockElementClass = targetBlockElement.getAttribute('class');
      playerDOMElement = document.getElementsByClassName('player')[0];
    }
  }

}
