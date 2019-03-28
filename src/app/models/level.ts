import {BlockType} from 'codelyzer/angular/styles/cssAst';


export class Level {
  private levelMap: string[][];
  private num: number;

  public getLevelMap(): string[][] {
    return this.levelMap;
  }

  public setLevelMap(num: number) {
    if (num === 1) {
      this.levelMap = [
          ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
          ['wall', 'player', 'void', 'void', 'bomb', 'wall', 'void', 'void', 'void', 'wall'],
          ['wall', 'void', 'void', 'wall', 'coin', 'void', 'void', 'void', 'void', 'wall'],
          ['wall', 'void', 'void', 'wall', 'wall', 'void', 'void', 'void', 'void', 'wall'],
          ['wall', 'wall', 'void', 'void', 'void', 'void', 'void', 'void', 'void', 'wall'],
          ['wall', 'question', 'void', 'void', 'void', 'void', 'wall', 'void', 'void', 'wall'],
          ['wall', 'void', 'void', 'void', 'void', 'void', 'wall', 'wall', 'void', 'wall'],
          ['wall', 'wall', 'wall', 'wall', 'void', 'coin', 'wall', 'finish', 'void', 'wall'],
          ['wall', 'coin', 'void', 'void', 'void', 'void', 'wall', 'void', 'void', 'wall'],
          ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall']
      ];
    } else if (num === 2) {
      this.levelMap = [
        ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
        ['wall', 'player', 'void', 'wall', 'void', 'void', 'wall', 'void', 'void', 'wall'],
        ['wall', 'void', 'void', 'wall', 'coin', 'void', 'void', 'wall', 'void', 'wall'],
        ['wall', 'coin', 'void', 'wall', 'wall', 'void', 'void', 'void', 'void', 'wall'],
        ['wall', 'bomb', 'void', 'void', 'void', 'void', 'void', 'void', 'void', 'wall'],
        ['wall', 'question', 'void', 'void', 'void', 'void', 'wall', 'bomb', 'void', 'wall'],
        ['wall', 'void', 'void', 'void', 'void', 'void', 'wall', 'wall', 'void', 'wall'],
        ['wall', 'wall', 'wall', 'wall', 'void', 'coin', 'wall', 'finish', 'void', 'wall'],
        ['wall', 'coin', 'void', 'void', 'void', 'void', 'wall', 'void', 'void', 'wall'],
        ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall']
      ];
    } else if (num === 3) {
      this.levelMap = [
        ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
        ['wall', 'player', 'void', 'wall', 'void', 'void', 'wall', 'void', 'void', 'wall'],
        ['wall', 'void', 'void', 'wall', 'coin', 'void', 'void', 'wall', 'void', 'wall'],
        ['wall', 'coin', 'void', 'wall', 'wall', 'void', 'void', 'void', 'void', 'wall'],
        ['wall', 'bomb', 'void', 'void', 'void', 'void', 'void', 'void', 'void', 'wall'],
        ['wall', 'question', 'void', 'void', 'void', 'void', 'wall', 'bomb', 'void', 'wall'],
        ['wall', 'void', 'void', 'void', 'void', 'void', 'wall', 'wall', 'void', 'wall'],
        ['wall', 'wall', 'wall', 'wall', 'void', 'coin', 'wall', 'finish', 'void', 'wall'],
        ['wall', 'coin', 'void', 'void', 'void', 'void', 'wall', 'void', 'void', 'wall'],
        ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall']
      ];
    }

  }
}
