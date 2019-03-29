import { Component, OnInit } from '@angular/core';

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
    alert(localStorage.getItem('sessionPlayerName'));
  }

}
