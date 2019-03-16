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
      ["void", "wall", "void", "wall", "void", "wall", "void", "wall", "void", "wall"],
      ["void", "wall", "void", "wall", "void", "wall", "void", "wall", "void", "wall"],
      ["void", "wall", "void", "wall", "void", "wall", "void", "wall", "void", "wall"],
      ["void", "wall", "void", "wall", "void", "wall", "void", "wall", "void", "wall"],
      ["void", "wall", "void", "wall", "void", "wall", "void", "wall", "void", "wall"],
      ["void", "wall", "void", "wall", "void", "wall", "void", "wall", "void", "wall"],
      ["void", "wall", "void", "wall", "void", "wall", "void", "wall", "void", "wall"],
      ["void", "wall", "void", "wall", "void", "wall", "void", "wall", "void", "wall"],
      ["void", "wall", "void", "wall", "void", "wall", "void", "wall", "void", "wall"],
      ["PLAYER", "wall", "void", "wall", "void", "wall", "void", "wall", "void", "wall"]
    ];
  }

  ngOnInit() {
    
  }

}
