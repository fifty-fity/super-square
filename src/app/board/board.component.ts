import { Component, OnInit } from '@angular/core';
import {Player} from '../models/player';
import {Game} from '../models/game';
import {LevelHandler} from '../models/level-handler';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

    playerLevel:number;
    playerScore:number;
    playerLives:number;

  constructor() {

  }

  ngOnInit() {
    var playerName: string= localStorage.getItem("name");
    var player: Player = new Player();

    player.setName(playerName);
    var myGame: Game = new Game(player);
    this.playerLevel = myGame.getLevel();
    this.playerScore = player.getScore();
    this.playerLives = player.getLives();
    var myLevelHandler: LevelHandler = new LevelHandler();
    var mapping = myLevelHandler.loadLevel(this.playerLevel);
    myLevelHandler.spawnBoard(mapping);
    myGame.frame();

    /*
      var element = document.getElementById("player");

      case "ArrowDown":
           element.style.left = parseInt(element.style.left) - 5 + 'px';
       break;

       case "ArrowUp":
           element.style.left = parseInt(element.style.left) + 5 + 'px';
       break;

       case "ArrowLeft":
           element.style.top = parseInt(element.style.top) - 5 + 'px';
       break;

         case "ArrowRight":
           element.style.top = parseInt(element.style.top) + 5 + 'px';
       break;
   */

    /*
    myLevelHandler.();
    this.blocks = myGame.startGame();
    var index : number;
    alert("all good");
    //getting player ele
    var elPlayer:HTMLElement;
    elPlayer = document.getElementsByClassName("block player");
    //myGame.frame(elPlayer);
    */






  }

}
