import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatButtonToggleModule, MatCheckboxModule,
  MatListModule
} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {GameDashboardComponent} from './game-dashboard/game-dashboard.component';
import {NewGameComponent} from './new-game/new-game.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    GameDashboardComponent,
    NewGameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatListModule,
    MatButtonToggleModule,
    FlexLayoutModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
