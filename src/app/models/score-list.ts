import {Player} from './player';
import {isNull, log} from 'util';

export class ScoreList {
  private scoreList = JSON.parse(localStorage.getItem('players'));
  private players = [];

  /**
   * Adds given player to the scorelist, while also sorting and pruning any excess players. Only the top 5 are displayed.
   * @param player The player to add to the scorelist
   */
  public addToScoreList(player: Player) {
    this.players = this.scoreList;

    // Adds a dummy player in case the list is empty.
    if (isNull(this.players)) {
      const tmpPlayer = new Player();
      tmpPlayer.setName('Wildcard');
      tmpPlayer.setScore(10);
      this.players = [tmpPlayer];
      localStorage.setItem('players', JSON.stringify(this.players));
    }

    // Pop the last player if we're at max and their score is lower than the current one's. If it's lower then don't add it.
    if (this.players.length === 5) {
      if (player.getScore() > this.players[4].score) {
        this.players.pop();
      } else {
        return;
      }
    }
    this.players.push(player);
    this.sortPlayers();
    localStorage.setItem('players', JSON.stringify(this.players));
  }

  /**
   * Sorts the players based on their score.
   */
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
