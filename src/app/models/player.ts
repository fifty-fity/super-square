export class Player {
  private name: string;
  private lives: number;
  private score: number;

  constructor(name: string) {
    this.name = name;
    this.lives = 3;
  }

  /**
   * Take a life from the player.
   */
  public takeALife() {
    this.lives--;
  }

  /**
   * Adds score to the player with the specified amount.
   * @param amount - The amount of score to add.
   */
  public addToScore(amount: number) {
    this.score += amount;
  }

// Getter and setters
  public get playerName(): string {
    return this.name;
  }

  public set playerName(name: string) {
    this.name = name;
  }

  public get playerLives(): number {
    return this.lives;
  }

  public get playerScore(): number {
    return this.score;
  }
}
