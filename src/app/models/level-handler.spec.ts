import { LevelHandler } from './level-handler';
import { Level } from './level';
import * as levelData from '../../assets/resources/levels.json';

describe('LevelHandler', () => {
  it('should create an instance', () => {
    expect(new LevelHandler()).toBeTruthy();
  });
});
