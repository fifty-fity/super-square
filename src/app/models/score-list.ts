import {Player} from './player';

export class ScoreList {
  scoreList: Array<string>;

  public addToScoreList(player: Player) {
    // This should write to a file instead.
    this.scoreList.push(player.playerName + ' ' + player.playerScore);
  }

// Getters and setters
  public get scoreboard() {
    return this.scoreList;
  }
}
