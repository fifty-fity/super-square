import {BlockType} from 'codelyzer/angular/styles/cssAst';


export class Level {
  private levelMap: string[][];
  private num: number;

  public getLevelMap(): string[][] {
    return this.levelMap;
  }
ss
  public setLevelMap(num: number) {
    if (num == 1) {
      this.levelMap = [
          ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"],
          ["wall", "player", "void", "wall", "void", "void", "wall", "void", "void", "wall"],
          ["wall", "void", "void", "wall", "coin", "void", "void", "void", "void", "wall"],
          ["wall", "void", "void", "wall", "wall", "void", "void", "void", "void", "wall"],
          ["wall", "void", "question", "void", "void", "void", "void", "void", "void", "wall"],
          ["wall", "void", "void", "void", "void", "void", "wall", "bomb", "void", "wall"],
          ["wall", "void", "void", "void", "void", "void", "wall", "wall", "void", "wall"],
          ["wall", "wall", "wall", "wall", "void", "coin", "wall", "void", "void", "wall"],
          ["wall", "coin", "void", "void", "void", "void", "wall", "void", "finish", "wall"],
          ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"]
      ];
    }

  }
}
