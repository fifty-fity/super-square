import { Component, OnInit } from '@angular/core';
import {Player} from '../models/player';
import {Game} from '../models/game';
import { LevelHandler } from '../models/level-handler';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  player: Player = new Player();
  game: Game = new Game(this.player);
  levelHandler: LevelHandler = new LevelHandler();

  constructor() {
    const playerName: string = localStorage.getItem('name');
    this.player.setName(playerName);
  }

  ngOnInit() {
    const mapping = this.levelHandler.loadLevel(this.game.getLevel());
    this.levelHandler.spawnBoard(mapping);
    this.game.frame(this.player, this.levelHandler);
  }
}
