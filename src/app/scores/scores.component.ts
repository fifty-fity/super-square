import { Component, OnInit } from '@angular/core';
//import { Hash } from 'crypto';

interface IScore {
  name: string;
  score: number;
};

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {
   
  scores: IScore[];

constructor() {
  this.scores = [
    { name: "John", score: 10 },
    { name: "Bob", score: 32 },
    { name: "Tim", score: 14 },
    { name: "Mary", score: 42 },
    { name: "Amy", score: 42 },
    { name: "Majmun", score: 100 },
  ]
}

  ngOnInit() {
  }

}
