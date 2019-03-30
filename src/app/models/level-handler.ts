import { Level } from './level';
import {BlockType} from './block';
import * as gameStrings from '../../assets/resources/strings.json';

export class LevelHandler {
  /**
   * Spawns the board for the game.
   * @param map The map to spawn.
   */
  public spawnBoard(map: number[][]) {
    const mydiv = document.getElementById('mydiv');
    const mytable = document.getElementById('mytable');

    mydiv.innerHTML = '';
    mytable.innerHTML = '';

    for (let i = 0; i < 10; i++) {
      const row = document.createElement('tr');
      for (let j = 0; j < 10; j++) {
        const cell = document.createElement('td');
        cell.setAttribute('id', i + '' + j);
        const imgdiv = document.createElement('div');
        const cellCode = document.createElement('img');
        cellCode.setAttribute('height', '75px');
        imgdiv.setAttribute('class', BlockType[map[i][j]]);
        cellCode.setAttribute('src', gameStrings.images[BlockType[map[i][j]]]);
        imgdiv.appendChild(cellCode);
        cell.appendChild(imgdiv);
        row.appendChild(cell);
      }
      mytable.appendChild(row);
    }
    mydiv.appendChild(mytable);
  }

  /**
   * Loads a given level.
   * @param levelNumber The level number.
   */
   public loadLevel(levelNumber: number): number[][] {
     const level: Level = new Level();
     level.setLevelMap(levelNumber);
     return level.getLevelMap();
   }
}
