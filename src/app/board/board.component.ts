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
  myGame: Game = new Game(this.player);
  myLevelHandler: LevelHandler = new LevelHandler();  

  constructor() {
    var playerName: string = localStorage.getItem("name");
    this.player.setName(playerName);
  }

  ngOnInit() {
    
    var mapping = this.myLevelHandler.loadLevel(this.myGame.getLevel());
    this.myLevelHandler.spawnBoard(mapping);
    this.myGame.frame(this.player, this.myLevelHandler);
   
  }

}
