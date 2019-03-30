import { Component, OnInit } from '@angular/core';
import * as gameStrings from '../../assets/resources/strings.json';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  setNamePlay(name: string) {
    localStorage.setItem('sessionPlayerName', name);
    alert(gameStrings.dialogs.welcome + ' ' + localStorage.getItem('sessionPlayerName') + '!');
  }
  name(name: string) {
    this.setNamePlay(name);
    window.location.reload();
  }
}
