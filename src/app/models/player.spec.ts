import { Player } from './player';

describe('Player', () => {
  it('should create an instance', () => {
    expect(new Player()).toBeTruthy();
  });
});

describe("Player", function () {
  beforeEach(function () {
    this.player = new Player();
    this.player.addScore(1000);
  });

  it("adding score works", function () {
    expect(this.player.getScore()).toBe(1000);
  });
});


describe("Player", function () {
  beforeEach(function () {
    this.player = new Player();
    this.player.setScore(150);
  });

  it("setting score works", function () {
    expect(this.player.getScore()).toBe(150);
  });
});


describe("Player", function () {
  beforeEach(function () {
    this.player = new Player();
    this.player.setLives(12);
  });

  it("setting lives works", function () {
    expect(this.player.getLives()).toBe(12);
  });
});


describe("Player", function () {
  beforeEach(function () {
    this.player = new Player();
    this.player.setLives(22);
    this.player.takeLife();
  });

  it("take life works", function () {
    expect(this.player.getLives()).toBe(21);
  });
});


describe("Player", function () {
  beforeEach(function () {
    this.player = new Player();
    this.player.setLives(25);
    this.player.giveLife();
  });

  it("give life works", function () {
    expect(this.player.getLives()).toBe(26);
  });
});

describe("Player", function () {
  beforeEach(function () {
    this.player = new Player();
    this.player.setName("Maria");
  });

  it("setting name works", function () {
    expect(this.player.getName()).toBe("Maria");
  });
});
