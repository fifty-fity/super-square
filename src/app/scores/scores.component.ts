import {Component, Input, OnInit} from '@angular/core';
import {ScoreList} from '../models/score-list';
import {Player} from '../models/player';
import * as gameStrings from '../strings.json';
import {log} from 'util';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})

export class ScoresComponent implements OnInit {
  @Input()
  msgEmptyList: string;
  scores: string[];

  private scoreList: ScoreList;

  public constructor() {
    this.scoreList = new ScoreList();
  }

  ngOnInit() {
    this.msgEmptyList = gameStrings.dialogs.noScores;
    this.scores = this.scoreList.getList();
  }

}
