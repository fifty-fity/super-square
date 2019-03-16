import { Component, OnInit } from '@angular/core';
import { Hash } from 'crypto';

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
    { name: "John", score: 10 },
    { name: "John", score: 10 },
    { name: "John", score: 10 },
    { name: "John", score: 10 },
    { name: "John", score: 10 },
  ]
}

  ngOnInit() {
  }

}
