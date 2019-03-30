
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
    localStorage.setItem('sessionPlayerScore', this.getScore().toString());
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

  /**
   * Prunes the player from the session storage.
   */
  public prune() {
    localStorage.removeItem('sessionPlayerName');
    localStorage.removeItem('sessionPlayerScore');
    this.name = '';
    this.lives = 3;
    this.score = 0;
  }

// Getters and setters
  public getScore(): number {
    return this.score;
  }

  public setScore(score: number) {
    this.score = score;
    localStorage.setItem('sessionPlayerScore', this.getScore().toString());
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
