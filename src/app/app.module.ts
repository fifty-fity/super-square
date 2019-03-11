import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { ScoresComponent } from './scores/scores.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { NameComponent } from './name/name.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ScoresComponent,
    TutorialComponent,
    NameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
