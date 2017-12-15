import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatSelectModule, MatSlideToggleModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NewMatchComponent, RandomPlayerSelectorDialogComponent} from './matches/new-match/new-match.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { MatKeyboardModule } from '@ngx-material-keyboard/core';
import 'hammerjs';
import {HttpClientModule} from '@angular/common/http';
import {MatchService} from './matches/shared/match.service';
import {PlayerService} from './players/shared/player.service';
import {MatchHistoryComponent} from './matches/match-history/match-history.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewMatchComponent,
    RandomPlayerSelectorDialogComponent,
    MatchHistoryComponent,
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
    MatSlideToggleModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [MatchService, PlayerService],
  bootstrap: [AppComponent],
  entryComponents: [RandomPlayerSelectorDialogComponent]
})
export class AppModule { }
