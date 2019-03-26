import {Player} from './player';
import { Block } from './block';

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

  public spawn(block: Block) {
    block.setType(6);
  }

  public startGame() {

  }

  public endGame() {
    // alert("The game ended");
    this.currentLevel = 1;
    this.sessionPlayer.setScore(0);
    this.sessionPlayer.setLives(3);

  }

  public getLevel(): number {
    return this.currentLevel;
  }

  public updateLives() {
    this.sessionPlayer.loseLife();
  }

  public updateScore(score: number) {
    this.sessionPlayer.addScore(score);
  }

  public frame() {
    //this works
    //Game.endGame();

    //this doesnt
    //this.updateScore(100);

    window.addEventListener("keydown", function (event) {
      if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
      }

      switch (event.key) {
        case "ArrowDown":
          // Do something for "down arrow" key press.
          
          var player= document.getElementsByClassName('player')[0];

          var player_id = player.parentElement.getAttribute("id");
          
          var below_block_id = 10 + Number(player_id);
          var below_block= document.getElementById(String(below_block_id)).firstChild as HTMLElement;
          var below_block_class = below_block.getAttribute("class");
          
          // alert(player_id);
          // alert(below_block_id);
          // alert(below_block_class);
          //this.test();

          while(below_block_class != "wall"){
              below_block.setAttribute("class", "player");
              var below_block_img = below_block.firstChild as HTMLElement;
              below_block_img.setAttribute("src", "assets/images/player.png");
              player.setAttribute("class", "void");
              var playe_img = player.firstChild as HTMLElement;
              playe_img.setAttribute("src", "assets/images/void.png");

            if(below_block_class == "void"){
              // alert("done");
            }else if(below_block_class == "coin"){
              //this.updateScore(100);
            }else if(below_block_class == "bomb"){
              //this.updateLives();

            }else if(below_block_class == "question"){
              //this.updateScore(1);

            }else if(below_block_class == "finish"){
              //endGame();
            }
            below_block_id += 10;
            below_block = document.getElementById(String(below_block_id)).firstChild as HTMLElement;
            below_block_class = below_block.getAttribute("class");
            player = document.getElementsByClassName('player')[0];
         }
          break;
        case "ArrowUp":
          // Do something for "down arrow" key press.
          
          var player= document.getElementsByClassName('player')[0];

          var player_id = player.parentElement.getAttribute("id");
          var above_block_id = Number(player_id) - 10;

          var above_block= document.getElementById(String(above_block_id)).firstChild as HTMLElement;
          var above_block_class = above_block.getAttribute("class");
          
          // alert(player_id);
          // alert(above_block_id);
          // alert(above_block_class);

          while(above_block_class != "wall"){
              above_block.setAttribute("class", "player");
              var above_block_img = above_block.firstChild as HTMLElement;
              above_block_img.setAttribute("src", "assets/images/player.png");
              player.setAttribute("class", "void");
              var playe_img = player.firstChild as HTMLElement;
              playe_img.setAttribute("src", "assets/images/void.png");

            if(above_block_class == "void"){
              // alert("done");
            }else if(above_block_class == "coin"){
              //this.updateScore(100);
            }else if(above_block_class == "bomb"){
              //this.updateLives();
            }else if(above_block_class == "question"){
             // this.updateScore(1);
            }else if(above_block_class == "finish"){
              //endGame();
            }
            above_block_id -= 10;
            above_block = document.getElementById(String(above_block_id)).firstChild as HTMLElement;
            above_block_class = above_block.getAttribute("class");
            player = document.getElementsByClassName('player')[0];
         }
          break;
        case "ArrowLeft":
          // Do something for "left arrow" key press.
          var player= document.getElementsByClassName('player')[0];

          var player_id = player.parentElement.getAttribute("id");
          var left_block_id = Number(player_id) -1;

          var left_block= document.getElementById(String(left_block_id)).firstChild as HTMLElement;
          var left_block_class = left_block.getAttribute("class");
          
          // alert(player_id);
          // alert(left_block_id);
          // alert(left_block_class);

          while(left_block_class != "wall"){
              left_block.setAttribute("class", "player");
              var left_block_img = left_block.firstChild as HTMLElement;
              left_block_img.setAttribute("src", "assets/images/player.png");
              player.setAttribute("class", "void");
              var playe_img = player.firstChild as HTMLElement;
              playe_img.setAttribute("src", "assets/images/void.png");
            if(left_block_class == "void"){
              // alert("done");
            }else if(left_block_class == "coin"){
             // this.updateScore(100);
            }else if(left_block_class == "bomb"){
             // this.updateLives();
            }else if(left_block_class == "question"){
            //  this.updateScore(1);
            }else if(left_block_class == "finish"){
              //endGame();
            }
            left_block_id -= 1;
            left_block = document.getElementById(String(left_block_id)).firstChild as HTMLElement;
            left_block_class = left_block.getAttribute("class");
            player = document.getElementsByClassName('player')[0];
         }
          
          break;
        case "ArrowRight":
          // Do something for "right arrow" key press.
          // Do something for "left arrow" key press.
          var player= document.getElementsByClassName('player')[0];

          var player_id = player.parentElement.getAttribute("id");
          var right_block_id = Number(player_id) + 1;

          var right_block= document.getElementById(String(right_block_id)).firstChild as HTMLElement;
          var right_block_class = right_block.getAttribute("class");
          
          // alert(player_id);

          // alert(right_block_id);
          // alert(right_block_class);

          while(right_block_class != "wall"){
            right_block.setAttribute("class", "player");
              var right_block_img = right_block.firstChild as HTMLElement;
              right_block_img.setAttribute("src", "assets/images/player.png");
              player.setAttribute("class", "void");
              var playe_img = player.firstChild as HTMLElement;
              playe_img.setAttribute("src", "assets/images/void.png");
            if(right_block_class == "void"){
              // alert("done");
            }else if(right_block_class == "coin"){
            //  this.updateScore(100);
            }else if(right_block_class == "bomb"){
           //   this.updateLives();
            }else if(right_block_class == "question"){
            //  this.updateScore(1);
            }else if(right_block_class == "finish"){
              //endGame();
            }
            right_block_id += 1;
            right_block = document.getElementById(String(right_block_id)).firstChild as HTMLElement;
            right_block_class = right_block.getAttribute("class");
            player = document.getElementsByClassName('player')[0];
         }
          break;

        default:
          return; // Quit when this doesn't handle the key event.
      }

      // Cancel the default action to avoid it being handled twice
      event.preventDefault();
    }, true);
  }
}
