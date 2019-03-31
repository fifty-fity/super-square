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
