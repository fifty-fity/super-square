
export class LevelHandler {
  private imageMap: String[][];
  public spawnBoard(map: string[][]) {
    
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      if (map[i][j] == "void") {
        this.imageMap[i][j] = "void.jpg";
      }
      else if (map[i][j] == "wall") {
        this.imageMap[i][j] == "wall.jpg"
      }
      else if (map[i][j] == "bomb") {
        this.imageMap[i][j] == "bomb.jpg"
      }
      else if (map[i][j] == "goal") {
        this.imageMap[i][j] == "goal.jpg"
      }
      else if (map[i][j] == "player") {
        this.imageMap[i][j] == "player.jpg"
      }
      else if (map[i][j] == "coin") {
        this.imageMap[i][j] == "coin.jpg"
      }
    }
  }
  }
}
