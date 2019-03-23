import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
   blocks: String[][];

  constructor() {
    //var blocks: String[][] = [["void", "wall"], ["void", "wall"]];
    this.blocks = [
      ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"],
      ["wall", "player", "void", "wall", "void", "void", "wall", "void", "void", "wall"],
      ["wall", "void", "void", "wall", "coin", "void", "void", "void", "void", "wall"],
      ["wall", "void", "void", "wall", "wall", "void", "void", "void", "void", "wall"],
      ["wall", "void", "question", "void", "void", "void", "void", "void", "void", "wall"],
      ["wall", "void", "void", "void", "void", "void", "wall", "bomb", "void", "wall"],
      ["wall", "void", "void", "void", "void", "void", "wall", "wall", "void", "wall"],
      ["wall", "wall", "wall", "wall", "void", "coin", "wall", "void", "void", "wall"],
      ["wall", "coin", "void", "void", "void", "void", "wall", "void", "finish", "wall"],
      ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"]
    ];
  }

  ngOnInit() {
    
  }

}
