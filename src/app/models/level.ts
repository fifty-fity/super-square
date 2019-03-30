import * as levelData from '../../assets/resources/levels.json';
import {log} from 'util';

export class Level {
  private levelMap: string[][];
  private maxLevel = 6;

  public getLevelMap(): string[][] {
    return this.levelMap;
  }

  /**
   * Sets in memory the level map from a json file.
   * @param levelNumber The ID number of the level e.g. 2
   */
  public setLevelMap(levelNumber: number) {
    const tempMap = [];

    // Check if it's beyond the max level and reset it back to the first in that case.
    if (levelNumber === this.maxLevel) {
      levelNumber = 1;
    }

    // Adjust the level number to match array identifiers
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
