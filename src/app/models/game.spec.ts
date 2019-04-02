import { Game } from './game';
import { Player } from './player';

describe('Game', () => {
  it('should create an instance', () => {
    // @ts-ignore
    expect(new Game()).toBeTruthy();
  });
});

describe('Game', () => {
  beforeEach(() => {
    this.player = new Player();
    this.game = new Game(this.player);
  });

  it('create new player', () => {
    expect(this.game.getLevel()).toBe(1);
  });


});

describe('Game', () => {
  beforeEach(() => {
    this.player = new Player();
    this.game = new Game(this.player);
    this.game.increaseLevel();
  });

  it('increasing level works', () => {
    expect(this.game.getLevel()).toBe(2);
  });


});


describe('Game', () => {
  beforeEach(() => {
    this.player = new Player();
    this.game = new Game(this.player);
    this.game.setLevel(2);
  });

  it('setting level works', () => {
    expect(this.game.getLevel()).toBe(2);
  });


});

describe('Game', () => {
  beforeEach(() => {
    this.player = new Player();
    this.game = new Game(this.player);
    this.game.setLevel(2);
    this.game.reset();
  });

  it('resetting level works', () => {
    expect(this.game.getLevel()).toBe(2);
  });

});
