import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {NewMatchComponent} from './matches/new-match/new-match.component';
import {StatisticComponent} from './statistics/statistic/statistic.component';
import {EloSimulationComponent} from './elo/elo-simulation/elo-simulation.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'new-match', component: NewMatchComponent},
  {path: 'statistic', component: StatisticComponent},
  {path: 'elo-simulation', component: EloSimulationComponent},
  /*{path: 'admin1234', component: AdminComponent},*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
