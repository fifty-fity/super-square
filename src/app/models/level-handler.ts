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
        // var cellCode = document.createTextNode(map[i][j]);
        if (map[i][j] === BlockType.player) {
          imgdiv.setAttribute('class', BlockType[BlockType.player]);
          cellCode.setAttribute('src', gameStrings.images.player);
        } else if (map[i][j] === BlockType.coin) {
          imgdiv.setAttribute('class', BlockType[BlockType.coin]);
          cellCode.setAttribute('src', gameStrings.images.coin);
        } else if (map[i][j] === BlockType.wall) {
          imgdiv.setAttribute('class', BlockType[BlockType.wall]);
          cellCode.setAttribute('src', gameStrings.images.wall);
        } else if (map[i][j] === BlockType.random) {
          imgdiv.setAttribute('class', BlockType[BlockType.random]);
          cellCode.setAttribute('src', gameStrings.images.random);
        } else if (map[i][j] === BlockType.goal) {
          imgdiv.setAttribute('class', BlockType[BlockType.goal]);
          cellCode.setAttribute('src', gameStrings.images.goal);
        } else if (map[i][j] === BlockType.bomb) {
          imgdiv.setAttribute('class', BlockType[BlockType.bomb]);
          cellCode.setAttribute('src', gameStrings.images.bomb);
        } else if (map[i][j] === BlockType.void) {
          imgdiv.setAttribute('class', BlockType[BlockType.void]);
          cellCode.setAttribute('src', gameStrings.images.void);
        }
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
