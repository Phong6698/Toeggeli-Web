import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatListModule
} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {GameDashboardComponent} from './game-dashboard/game-dashboard.component';
import {NewGameComponent} from './new-game/new-game.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { MatKeyboardModule } from '@ngx-material-keyboard/core';



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
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatListModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatKeyboardModule,
    MatIconModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
