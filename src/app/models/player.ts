
export class Player {

  private name: string;
  private lives: number;
  private score: number;

  constructor() {
    this.name = "";
    this.lives = 3;
    this.score = 0;
  }

 //Getters and setters

  public getScore(): number {
    return this.score;
  }
  public setScore(score: number) {
    this.score = score;
  }


  public getName(): string {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }


  public getLives(): number {
    return this.lives;
  }

  public setLives(lives: number) {
    this.lives = lives;
  }
     
}
