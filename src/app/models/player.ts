
export class Player {

  private name: string;
  private lives: number;
  private score: number;

  constructor() {
    this.name = '';
    this.lives = 3;
    this.score = 0;
  }

  /**
   * Adds a specific amount of score to the player.
   * @param amount score added
   */
  public addScore(amount: number) {
    this.score += amount;
  }

  /**
   * Takes a single life away from the player.
   */
  public takeLife() {
    this.lives -= 1;
  }

  /**
   * The developers taketh and the developers giveth.
   */
  public giveLife() {
    this.lives += 1;
  }

// Getters and setters
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
