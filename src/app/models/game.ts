import {Player} from './player';
import { Block } from './block';
import { LevelHandler } from './level-handler';
import * as gameStrings from '../../assets/resources/strings.json';
import {ScoreList} from './score-list';
import {isNull} from 'util';

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
  private scoreList: ScoreList;

  constructor(player: Player) {
    this.sessionLevel = 1;
    this.sessionPlayer = player;
    this.scoreList = new ScoreList();
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

  public getScoreList(): ScoreList {
    return this.scoreList;
  }

  public setLevel(level: number) {
    this.sessionLevel = level;
  }

// Methods
  public endGame() {
    this.sessionPlayer.prune();
    this.setLevel(1);
    window.location.href = './';
  }

  /**
   * Should reset the game's board.
   */
  public reset() {
    this.getLevelHandler().spawnBoard(this.getLevelHandler().loadLevel(this.getLevel()));
  }

  /**
   * Handles the game's input listening during game runtime.
   * @param levelHandler The level handler to be used for listening.
   */
  public frame(levelHandler: LevelHandler) {
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
          break;

        default: return;
      }
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

    if (isNull(document.getElementById(String(targetBlockId)))) {
      return;
    }

    let targetBlockElement = document.getElementById(String(targetBlockId)).firstChild as HTMLElement;
    let targetBlockElementClass = targetBlockElement.getAttribute('class');

    while (targetBlockElementClass !== 'wall') {
      targetBlockElement.setAttribute('class', 'player');

      const targetBlockImageElement = targetBlockElement.firstChild as HTMLElement;
      targetBlockImageElement.setAttribute('src', gameStrings.images.player);

      playerDOMElement.setAttribute('class', 'void');
      const playerImageElement = playerDOMElement.firstChild as HTMLElement;
      playerImageElement.setAttribute('src', gameStrings.images.void);

      new Block().reaction(targetBlockElementClass, this);

      targetBlockId += movementDirection;

      if (isNull(document.getElementById(String(targetBlockId)))) {
        return;
      }

      targetBlockElement = document.getElementById(String(targetBlockId)).firstChild as HTMLElement;
      targetBlockElementClass = targetBlockElement.getAttribute('class');
      playerDOMElement = document.getElementsByClassName('player')[0];
    }
  }

}
