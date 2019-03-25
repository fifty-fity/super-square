
export class Player {

  private name: string;
  private lives: number;
  private score: number;

  constructor() {
    this.name = "";
    this.lives = 3;
    this.score = 0;
  }

  /**
   * Take a life from the player.
   */
  public loseLife() {
    this.lives--;
  }

  /**
   * Adds score to the player with the specified amount.
   * @param amount - The amount of score to add.
   */
  public addScore(amount: number) {
    this.score += amount;
    return this.score;
  }

  public setScore(score: number) {
    this.score = score;
  }

// Getter and setters
  public getName(): string {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getLives(): number {
    return this.lives;
  }

  public getScore(): number {
    return this.score;
  }

  public setLives(lives: number) {
    this.lives = lives;
  }
}
