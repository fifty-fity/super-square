import {Player} from './player';
import {isNull, log} from 'util';

export class ScoreList {
  private scoreList = JSON.parse(localStorage.getItem('players'));
  private players = [];

  public addToScoreList(player: Player) {
    if (this.players.length === 0) {
      this.players = this.scoreList;
    }
    if (this.players.length === 5) {
      this.players.pop();
    }
    this.players.push(player);
    this.sortPlayers();
    localStorage.setItem('players', JSON.stringify(this.players));
  }

  private sortPlayers() {
    const sortedPlayers = this.players.sort((a, b) => {
      return a.score < b.score ? 1 : a.score > b.score ? - 1 : 0;
    });
    this.players = sortedPlayers;
  }

// Getters and setters
  public getList() {
    return this.scoreList;
  }
}
