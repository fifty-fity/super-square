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
    alert("The game ended");
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

  public static updateScore(score: number) {
    this.sessionPlayer.addScore(score);
  }
  
  public static test(){
    alert("test");
  }

  public frame(evt: KeyboardEvent) {
    //this works
    //Game.test();

    //this doesnt
    //this.updateScore(100);

    window.addEventListener("keydown", function (event) {
      if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
      }

      switch (event.key) {
        case "ArrowDown":
          // Do something for "down arrow" key press.
          
          var player: HTMLElement = document.getElementsByClassName('player')[0];

          var player_id = player.parentElement.getAttribute("id");
          
          var below_block_id = 10 + Number(player_id);
          var below_block = document.getElementById(below_block_id).firstChild;
          var below_block_class = below_block.getAttribute("class");
          
          // alert(player_id);
          // alert(below_block_id);
          // alert(below_block_class);
          //this.test();

          while(below_block_class != "wall"){
            if(below_block_class == "void"){

              below_block.setAttribute("class", "player");
              below_block.firstChild.setAttribute("src", "assets/images/player.png");
              player.setAttribute("class", "void");
              player.firstChild.setAttribute("src", "assets/images/void.png");
              // alert("done");
            }else if(below_block_class == "coin"){
              
              below_block.setAttribute("class", "player");
              below_block.firstChild.setAttribute("src", "assets/images/player.png");
              player.setAttribute("class", "void");
              player.firstChild.setAttribute("src", "assets/images/void.png");
              //this.updateScore(100);

            }else if(below_block_class == "bomb"){
              //this.updateLives();
              below_block.setAttribute("class", "player");
              below_block.firstChild.setAttribute("src", "assets/images/player.png");
              player.setAttribute("class", "void");
              player.firstChild.setAttribute("src", "assets/images/void.png");

            }else if(below_block_class == "question"){
              //this.updateScore(1);
              below_block.setAttribute("class", "player");
              below_block.firstChild.setAttribute("src", "assets/images/player.png");
              player.setAttribute("class", "void");
              player.firstChild.setAttribute("src", "assets/images/void.png");

            }else if(below_block_class == "finish"){
              //endGame();
            }
            below_block_id += 10;
            below_block = document.getElementById(below_block_id).firstChild;
            below_block_class = below_block.getAttribute("class");
            player = document.getElementsByClassName('player')[0];
         }
          break;
        case "ArrowUp":
          // Do something for "down arrow" key press.
          
          var player: HTMLElement = document.getElementsByClassName('player')[0];

          var player_id = player.parentElement.getAttribute("id");
          var below_block_id = Number(player_id) - 10;

          var below_block = document.getElementById(below_block_id).firstChild;
          var below_block_class = below_block.getAttribute("class");
          
          // alert(player_id);
          // alert(below_block_id);
          // alert(below_block_class);

          while(below_block_class != "wall"){
            if(below_block_class == "void"){
              below_block.setAttribute("class", "player");
              below_block.firstChild.setAttribute("src", "assets/images/player.png");
              player.setAttribute("class", "void");
              player.firstChild.setAttribute("src", "assets/images/void.png");
              // alert("done");
            }else if(below_block_class == "coin"){
              //this.updateScore(100);
              below_block.setAttribute("class", "player");
              below_block.firstChild.setAttribute("src", "assets/images/player.png");
              player.setAttribute("class", "void");
              player.firstChild.setAttribute("src", "assets/images/void.png");

            }else if(below_block_class == "bomb"){
              //this.updateLives();
              below_block.setAttribute("class", "player");
              below_block.firstChild.setAttribute("src", "assets/images/player.png");
              player.setAttribute("class", "void");
              player.firstChild.setAttribute("src", "assets/images/void.png");

            }else if(below_block_class == "question"){
             // this.updateScore(1);
              below_block.setAttribute("class", "player");
              below_block.firstChild.setAttribute("src", "assets/images/player.png");
              player.setAttribute("class", "void");
              player.firstChild.setAttribute("src", "assets/images/void.png");

            }else if(below_block_class == "finish"){
              //endGame();
            }
            below_block_id -= 10;
            below_block = document.getElementById(below_block_id).firstChild;
            below_block_class = below_block.getAttribute("class");
            player = document.getElementsByClassName('player')[0];
         }
          break;
        case "ArrowLeft":
          // Do something for "left arrow" key press.
          var player: HTMLElement = document.getElementsByClassName('player')[0];

          var player_id = player.parentElement.getAttribute("id");
          var below_block_id = Number(player_id) -1;

          var below_block = document.getElementById(below_block_id).firstChild;
          var below_block_class = below_block.getAttribute("class");
          
          // alert(player_id);
          // alert(below_block_id);
          // alert(below_block_class);

          while(below_block_class != "wall"){
            if(below_block_class == "void"){
              below_block.setAttribute("class", "player");
              below_block.firstChild.setAttribute("src", "assets/images/player.png");
              player.setAttribute("class", "void");
              player.firstChild.setAttribute("src", "assets/images/void.png");
              // alert("done");
            }else if(below_block_class == "coin"){
             // this.updateScore(100);
              below_block.setAttribute("class", "player");
              below_block.firstChild.setAttribute("src", "assets/images/player.png");
              player.setAttribute("class", "void");
              player.firstChild.setAttribute("src", "assets/images/void.png");

            }else if(below_block_class == "bomb"){
             // this.updateLives();
              below_block.setAttribute("class", "player");
              below_block.firstChild.setAttribute("src", "assets/images/player.png");
              player.setAttribute("class", "void");
              player.firstChild.setAttribute("src", "assets/images/void.png");

            }else if(below_block_class == "question"){
            //  this.updateScore(1);
              below_block.setAttribute("class", "player");
              below_block.firstChild.setAttribute("src", "assets/images/player.png");
              player.setAttribute("class", "void");
              player.firstChild.setAttribute("src", "assets/images/void.png");

            }else if(below_block_class == "finish"){
              //endGame();
            }
            below_block_id -= 1;
            below_block = document.getElementById(below_block_id).firstChild;
            below_block_class = below_block.getAttribute("class");
            player = document.getElementsByClassName('player')[0];
         }
          
          break;
        case "ArrowRight":
          // Do something for "right arrow" key press.
          // Do something for "left arrow" key press.
          var player: HTMLElement = document.getElementsByClassName('player')[0];

          var player_id = player.parentElement.getAttribute("id");
          var below_block_id = Number(player_id) + 1;

          var below_block = document.getElementById(below_block_id).firstChild;
          var below_block_class = below_block.getAttribute("class");
          
          // alert(player_id);
          // alert(below_block_id);
          // alert(below_block_class);

          while(below_block_class != "wall"){
            if(below_block_class == "void"){
              below_block.setAttribute("class", "player");
              below_block.firstChild.setAttribute("src", "assets/images/player.png");
              player.setAttribute("class", "void");
              player.firstChild.setAttribute("src", "assets/images/void.png");
              // alert("done");
            }else if(below_block_class == "coin"){
            //  this.updateScore(100);
              below_block.setAttribute("class", "player");
              below_block.firstChild.setAttribute("src", "assets/images/player.png");
              player.setAttribute("class", "void");
              player.firstChild.setAttribute("src", "assets/images/void.png");

            }else if(below_block_class == "bomb"){
           //   this.updateLives();
              below_block.setAttribute("class", "player");
              below_block.firstChild.setAttribute("src", "assets/images/player.png");
              player.setAttribute("class", "void");
              player.firstChild.setAttribute("src", "assets/images/void.png");

            }else if(below_block_class == "question"){
            //  this.updateScore(1);
              below_block.setAttribute("class", "player");
              below_block.firstChild.setAttribute("src", "assets/images/player.png");
              player.setAttribute("class", "void");
              player.firstChild.setAttribute("src", "assets/images/void.png");

            }else if(below_block_class == "finish"){
              //endGame();
            }
            below_block_id += 1;
            below_block = document.getElementById(below_block_id).firstChild;
            below_block_class = below_block.getAttribute("class");
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
