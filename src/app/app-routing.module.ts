import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NameComponent } from './name/name.component';
import { BoardComponent } from './board/board.component';
import { ScoresComponent } from './scores/scores.component';
import { TutorialComponent } from './tutorial/tutorial.component';

const routes: Routes = [
  { path: 'board', component: BoardComponent },
  { path: 'name', component: NameComponent },
  { path: 'scores', component: ScoresComponent },
  { path: 'tutorial', component: TutorialComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
