import { Game } from './game';
import { Player } from './player';

describe('Game', () => {
  it('should create an instance', () => {
    // @ts-ignore
    expect(new Game()).toBeTruthy();
  });
});

describe("Game", function () {
  beforeEach(function () {
    this.player = new Player();
    this.game = new Game(this.player);
    this.game.increaseLevel();
  });

  it("increasing level works", function () {
    expect(this.game.getLevel()).toBe(2);
  });


});

//describe("Game", function () {
//  beforeEach(function () {
//    this.player = new Player();
//    this.game = new Game(this.player);
//    this.game.increaseLevel();
//    this.game.increaseLevel();
//    this.game.endGame();
//  });

//  it("endGame resets to level 1", function () {
//    expect(this.game.getLevel()).toBe(1);
//  });


//});
