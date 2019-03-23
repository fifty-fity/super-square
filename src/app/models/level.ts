import {BlockType} from 'codelyzer/angular/styles/cssAst';


export class Level {
  private levelMap: string[][];
  private num: number;

  public getLevelmap(): string[][] {
    return this.levelMap;
  }

  public setLevelMap(num: number) {
    if (num == 1) {
      this.levelMap = [["void", "void", "void", "void", "void", "void", "void", "void", "void", "void", "void",],
        ["void", "void", "void", "void", "void", "void", "void", "void", "void", "void", "void",],
        ["void", "void", "void", "void", "void", "void", "void", "void", "void", "void", "void",],
        ["void", "void", "void", "void", "void", "void", "void", "void", "void", "void", "void",],
        ["void", "void", "void", "void", "void", "void", "void", "void", "void", "void", "void",],
        ["void", "void", "void", "void", "void", "void", "void", "void", "void", "void", "void",],
        ["void", "void", "void", "void", "void", "void", "void", "void", "void", "void", "void",],
        ["void", "void", "void", "void", "void", "void", "void", "void", "void", "void", "void",],
        ["void", "void", "void", "void", "void", "void", "void", "void", "void", "void", "void",],
        ["void", "void", "void", "void", "void", "void", "void", "void", "void", "void", "void",]
        
      ];
    }
    
  }
}
