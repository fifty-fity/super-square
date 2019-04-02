import { Block } from './block';
import { Game } from './game';
import { Player } from './player';

describe('Block', () => {
  it('should create an instance', () => {
    expect(new Block()).toBeTruthy();
  });
});

describe('Block', () => {
  beforeEach(() => {
    this.block = new Block();
    this.block.setType(0);
  });

  it('getter and setter works', () => {
    expect(this.block.getType()).toBe(0);
  });

});

describe('Block', () => {
  beforeEach(() => {
    this.block = new Block();
    this.player = new Player();
    this.game = new Game(this.player);
    this.block.reaction('coin', this.game);
  });

  it('coin reaction works', () => {
    expect(this.player.getScore()).toBe(10);
  });
});

describe('Block', () => {
  beforeEach(() => {
    this.block = new Block();
    this.player = new Player();
    this.game = new Game(this.player);
    this.block.reaction('bomb', this.game);
  });

  it('bomb reaction decreases score', () => {
    expect(this.player.getScore()).toBe(-25);
  });

  it('bomb reaction takes a life', () => {
    expect(this.player.getLives()).toBe(2);
  });
});

describe('Block', () => {
  beforeEach(() => {
    this.block = new Block();
    this.player = new Player();
    this.game = new Game(this.player);
    this.block.reaction('goal', this.game);
  });

  it('goal increases level', () => {
    expect(this.game.getLevel()).toBe(2);
  });
});
