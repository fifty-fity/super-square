import { Component, OnInit } from '@angular/core';
import {log} from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'super-square';
  public name = '';

  private localName: string = localStorage.getItem('sessionPlayerName');
    ngOnInit(): void {
      if (this.localName != null) {
        this.name = this.localName;
      }
    }

}
