import { Block } from './block';
import {Player} from './player';
import { Level } from './level';

export class LevelHandler {
  public spawnBoard(map: string[][]) {

        var mydiv = document.getElementById("mydiv");

        var mytable = document.getElementById("mytable");

        for (var i = 0; i < 10; i++) {
            var row = document.createElement("tr");
             for (var j = 0; j < 10; j++) {
                var cell = document.createElement("td");
                var imgdiv = document.createElement("div");

                var cellCode = document.createElement("img");
                cellCode.setAttribute("height","75px");
                //var cellCode = document.createTextNode(map[i][j]);
                  if (map[i][j] == "player"){
                    imgdiv.setAttribute("id", "player");
                    cellCode.setAttribute("src","assets/images/player.png");

                  }
                  else if (map[i][j] == "coin"){
                    imgdiv.setAttribute("class", "coin");
                    cellCode.setAttribute("src","assets/images/coin.png");

                  }
                  else if (map[i][j] == "wall"){
                    imgdiv.setAttribute("class", "wall");
                    cellCode.setAttribute("src","assets/images/wall.png");
                  }
                  else if (map[i][j] == "question"){
                    imgdiv.setAttribute("class", "random");
                    cellCode.setAttribute("src","assets/images/question.png");
                  }
                  else if (map[i][j] == "finish"){
                    imgdiv.setAttribute("class", "goal");
                    cellCode.setAttribute("src","assets/images/finish.png");
                  }
                  else if (map[i][j] == "bomb"){
                    imgdiv.setAttribute("class", "bomb");
                    cellCode.setAttribute("src","assets/images/bomb.png");
                  }
                  else if (map[i][j] == "void"){
                    imgdiv.setAttribute("class", "void");
                    cellCode.setAttribute("src","assets/images/void.png");
                  }
                imgdiv.appendChild(cellCode);
                cell.appendChild(imgdiv);
              row.appendChild(cell);
            }
	          mytable.appendChild(row);
        }
     mydiv.appendChild(mytable);
}

   public loadLevel(levelNumber:number):string[][]{
     let level: Level = new Level();
     let Map: string[][];
     level.setLevelMap(levelNumber);
     Map = level.getLevelMap();
     return Map;
   }

}
