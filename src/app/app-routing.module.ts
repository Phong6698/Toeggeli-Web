import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import {GameDashboardComponent} from './game-dashboard/game-dashboard.component';
import {NewGameComponent} from './new-game/new-game.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: GameDashboardComponent},
  {path: 'new-game', component: NewGameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
