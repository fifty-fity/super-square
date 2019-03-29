import * as levelData from '../../assets/resources/levels.json';
import {log} from 'util';

export class Level {
  private levelMap: string[][];
  private maxLevel = 6;
  private num: number;

  public getLevelMap(): string[][] {
    return this.levelMap;
  }

  public setLevelMap(levelNumber: number) {
    const tempMap = [];
    log(levelNumber);

    if (levelNumber === this.maxLevel) {
      levelNumber = 1;
    }

    if (levelNumber === 1) {
      levelNumber = 0;
    }
    if (levelNumber > 1) {
      levelNumber -= 1;
    }

    for (let i = 0; i < 10; i++) {
      tempMap[i] = Object.values(Object.values(levelData.levels)[levelNumber].data)[i];
    }
    this.levelMap = tempMap;
  }
}
