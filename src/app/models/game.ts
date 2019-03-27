import {Player} from './player';
import { Block } from './block';
import { BoardComponent } from '../board/board.component';
import { LevelHandler } from './level-handler';
import { Router } from '@angular/router';

export class Game {
  private currentLevel: number;
  private sessionPlayer: Player;
 
  constructor(player: Player) {
    this.currentLevel = 1;
    this.sessionPlayer = player;
  }

  /**
   * Increases the game's level to the next one. This should call and refresh the grid for the next level, also handle spawning.
   */
  public increaseLevel() {
    this.currentLevel++;
    
  }


// Getters and setters.
  public getPlayer(): Player {
    return this.sessionPlayer;
  }

  public getLevel(): number {
    return this.currentLevel;
  }

  public setLevel(level: number) {
    this.currentLevel = level;
  }

  public spawn(block: Block) {
    block.setType(6);
  }
  
  public endGame() {
    this.sessionPlayer.setScore(0);
    this.sessionPlayer.setLives(3);
    this.setLevel(1);
  }

  public reset(levelHandler: LevelHandler) {
    this.sessionPlayer.setScore(0);
    levelHandler.spawnBoard(levelHandler.loadLevel(this.getLevel()));
  }

  public updateLives(playerObj: Player) {
    var lives = playerObj.getLives();
    playerObj.setLives(lives - 1);
    
  }

  private updateScore(playerObj: Player, scoreAdd: number) {
    var score = playerObj.getScore();
    playerObj.setScore(score + scoreAdd);
    
  }
   
  public frame(playerObj: Player, levelHandler: LevelHandler) {
    var self = this;
    var player= document.getElementsByClassName('player')[0];
          var player_id = player.parentElement.getAttribute("id");

    window.addEventListener("keydown", function (event) {
      if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
      }

      switch (event.key) {
        case "ArrowDown":
          self.down(playerObj, levelHandler);
          break;
        case "ArrowUp":
          self.up(playerObj, levelHandler);
          break;
        case "ArrowLeft":
          self.left(playerObj, levelHandler);
          break;
        case "ArrowRight":
          self.right(playerObj, levelHandler);
          break;

        default: return; // Quit when this doesn't handle the key event
      }

      // Cancel the default action to avoid it being handled twice
      event.preventDefault();
    }, true);
  } 


  private down(playerObj: Player, levelHandler: LevelHandler) {
    var player = document.getElementsByClassName('player')[0];
    var player_id = player.parentElement.getAttribute("id");
    var below_block_id = 10 + Number(player_id);
    var below_block = document.getElementById(String(below_block_id)).firstChild as HTMLElement;
    var below_block_class = below_block.getAttribute("class");

    while (below_block_class != "wall") {
      below_block.setAttribute("class", "player");
      var below_block_img = below_block.firstChild as HTMLElement;
      below_block_img.setAttribute("src", "assets/images/player.png");
      player.setAttribute("class", "void");
      var playe_img = player.firstChild as HTMLElement;
      playe_img.setAttribute("src", "assets/images/void.png");

      if (below_block_class == "coin") {
        this.updateScore(playerObj, 20);
      }
      
      if (below_block_class == "question") {
        this.updateScore(playerObj, 1);
      }
      if (below_block_class == "goal") {
        alert("You won");
        this.increaseLevel();
        var newMapping = levelHandler.loadLevel(this.getLevel());
        alert(this.getLevel());
        levelHandler.spawnBoard(newMapping);
        
      }
      if (below_block_class == "bomb") {
        if (playerObj.getLives() > 0) {
          this.updateLives(playerObj);
          this.reset(levelHandler);
        }
        else {
          alert("Sorry. You lost.");
          this.endGame();
        }

      }
      below_block_id += 10;
      below_block = document.getElementById(String(below_block_id)).firstChild as HTMLElement;
      below_block_class = below_block.getAttribute("class");
      player = document.getElementsByClassName('player')[0];
    }
  }

  private up(playerObj: Player, levelHandler: LevelHandler) {
    var player = document.getElementsByClassName('player')[0];
    var player_id = player.parentElement.getAttribute("id");
    var above_block_id = Number(player_id) - 10;
    var above_block = document.getElementById(String(above_block_id)).firstChild as HTMLElement;
    var above_block_class = above_block.getAttribute("class");

    while (above_block_class != "wall") {
      above_block.setAttribute("class", "player");
      var above_block_img = above_block.firstChild as HTMLElement;
      above_block_img.setAttribute("src", "assets/images/player.png");
      player.setAttribute("class", "void");
      var playe_img = player.firstChild as HTMLElement;
      playe_img.setAttribute("src", "assets/images/void.png");
      
      if (above_block_class == "coin") {
        this.updateScore(playerObj, 20);
      }
      
      if (above_block_class == "question") {
        this.updateScore(playerObj, 1);
      }
      if (above_block_class == "goal") {
        alert("You won");
        this.increaseLevel();
        var newMapping = levelHandler.loadLevel(this.getLevel());
        alert(this.getLevel());
        levelHandler.spawnBoard(newMapping);
      }
      if (above_block_class == "bomb") {
        if (playerObj.getLives() > 0) {
          this.updateLives(playerObj);
          this.reset(levelHandler);
        }
        else {
          alert("Sorry. You lost.");
          this.endGame();
        }
          
      }
      
      above_block_id -= 10;
      above_block = document.getElementById(String(above_block_id)).firstChild as HTMLElement;
      above_block_class = above_block.getAttribute("class");
      player = document.getElementsByClassName('player')[0];
     
    }
  }

  private left(playerObj: Player, levelHandler: LevelHandler) {
    var player = document.getElementsByClassName('player')[0];
    var player_id = player.parentElement.getAttribute("id");
    var left_block_id = Number(player_id) - 1;
    var left_block = document.getElementById(String(left_block_id)).firstChild as HTMLElement;
    var left_block_class = left_block.getAttribute("class");

    while (left_block_class != "wall") {
      left_block.setAttribute("class", "player");
      var left_block_img = left_block.firstChild as HTMLElement;
      left_block_img.setAttribute("src", "assets/images/player.png");
      player.setAttribute("class", "void");
      var playe_img = player.firstChild as HTMLElement;
      playe_img.setAttribute("src", "assets/images/void.png");

      if (left_block_class == "coin") {
        this.updateScore(playerObj, 20);
      }
      if (left_block_class == "question") {
        this.updateScore(playerObj, 1);
      }
      if (left_block_class == "goal") {
        alert("You won");
        this.increaseLevel();
        var newMapping = levelHandler.loadLevel(this.getLevel());
        alert(this.getLevel());
        levelHandler.spawnBoard(newMapping);
      }
      if (left_block_class == "bomb") {
        if (playerObj.getLives() > 0) {
          this.updateLives(playerObj);
          this.reset(levelHandler);
        }
        else {
          alert("Sorry. You lost.");
          this.endGame();
        }
      }
      left_block_id -= 1;
      left_block = document.getElementById(String(left_block_id)).firstChild as HTMLElement;
      left_block_class = left_block.getAttribute("class");
      player = document.getElementsByClassName('player')[0];
    }

  }

  private right(playerObj: Player, levelHandler: LevelHandler) {
    var player = document.getElementsByClassName('player')[0];
    var player_id = player.parentElement.getAttribute("id");
    var right_block_id = Number(player_id) + 1;
    var right_block = document.getElementById(String(right_block_id)).firstChild as HTMLElement;
    var right_block_class = right_block.getAttribute("class");

    while (right_block_class != "wall") {
      right_block.setAttribute("class", "player");
      var right_block_img = right_block.firstChild as HTMLElement;
      right_block_img.setAttribute("src", "assets/images/player.png");
      player.setAttribute("class", "void");
      var playe_img = player.firstChild as HTMLElement;
      playe_img.setAttribute("src", "assets/images/void.png");
      if (right_block_class == "coin") {
        this.updateScore(playerObj, 20);
      }
      
      if (right_block_class == "question") {
        this.updateScore(playerObj, 1);
      }
      if (right_block_class == "goal") {
        alert("You won");
        this.increaseLevel();
        var newMapping = levelHandler.loadLevel(this.getLevel());
        alert(this.getLevel());
        levelHandler.spawnBoard(newMapping);
      }
      if (right_block_class == "bomb") {
        if (playerObj.getLives() > 0) {
          this.updateLives(playerObj);
          this.reset(levelHandler);
        }
        else {
          alert("Sorry. You lost.");
          this.endGame();
        }
      }
      right_block_id += 1;
      right_block = document.getElementById(String(right_block_id)).firstChild as HTMLElement;
      right_block_class = right_block.getAttribute("class");
      player = document.getElementsByClassName('player')[0];
    }
  }

}
