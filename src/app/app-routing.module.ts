import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {NewMatchComponent} from './matches/new-match/new-match.component';
import {StatisticComponent} from './statistics/statistic/statistic.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'new-match', component: NewMatchComponent},
  {path: 'statistic', component: StatisticComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
