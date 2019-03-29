import { Block } from './block';
import {Player} from './player';
import { Level } from './level';
import * as gameStrings from '../../assets/resources/strings.json';

export class LevelHandler {
  /**
   * Spawns the board for the game.
   * @param map The map to spawn.
   */
  public spawnBoard(map: string[][]) {
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
        if (map[i][j] === 'player') {
          imgdiv.setAttribute('class', 'player');
          cellCode.setAttribute('src', gameStrings.images.player);
        } else if (map[i][j] === 'coin') {
          imgdiv.setAttribute('class', 'coin');
          cellCode.setAttribute('src', gameStrings.images.coin);
        } else if (map[i][j] === 'wall') {
          imgdiv.setAttribute('class', 'wall');
          cellCode.setAttribute('src', gameStrings.images.wall);
        } else if (map[i][j] === 'question') {
          imgdiv.setAttribute('class', 'question');
          cellCode.setAttribute('src', gameStrings.images.question);
        } else if (map[i][j] === 'finish') {
          imgdiv.setAttribute('class', 'goal');
          cellCode.setAttribute('src', gameStrings.images.goal);
        } else if (map[i][j] === 'bomb') {
          imgdiv.setAttribute('class', 'bomb');
          cellCode.setAttribute('src', gameStrings.images.bomb);
        } else if (map[i][j] === 'void') {
          imgdiv.setAttribute('class', 'void');
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
   public loadLevel(levelNumber: number): string[][] {
     const level: Level = new Level();
     let Map: string[][];
     level.setLevelMap(levelNumber);
     Map = level.getLevelMap();
     return Map;
   }
}
