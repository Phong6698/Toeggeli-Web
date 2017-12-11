import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatSelectModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NewMatchComponent} from './matches/new-match/new-match.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { MatKeyboardModule } from '@ngx-material-keyboard/core';
import 'hammerjs';
import {HttpClientModule} from '@angular/common/http';
import {MatchService} from './matches/shared/match.service';
import {PlayerService} from './players/shared/player.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewMatchComponent,

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
    MatToolbarModule,
    MatTooltipModule,
    MatCardModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [MatchService, PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
