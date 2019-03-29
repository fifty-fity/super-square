import {Player} from './player';

export class ScoreList {
  private scoreList = localStorage.getItem('scoreList');

  public addToScoreList(name: string, score: number) {
    // Put the object into storage
    // localStorage.setItem('scoreList', JSON.stringify(this.scoreList));
    // Retrieve the object from storage
    // var retrievedObject = localStorage.getItem('scoreList');
    // console.log('retrievedObject: ', JSON.parse(retrievedObject));

    // write to local storage
    const retrievedList = JSON.parse(this.scoreList);
    retrievedList[0].push({ name: score });
    localStorage.setItem('scoreList', JSON.stringify(retrievedList));
  }

// Getters and setters
  public getList() {
    return this.scoreList;
  }
}
