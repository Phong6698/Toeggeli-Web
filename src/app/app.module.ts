import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatSelectModule, MatSlideToggleModule, MatSortModule, MatTableModule, MatToolbarModule,
  MatTooltipModule, MatExpansionModule
} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NewMatchComponent, RandomPlayerSelectorDialogComponent} from './matches/new-match/new-match.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {MatKeyboardModule} from '@ngx-material-keyboard/core';
import 'hammerjs';
import {HttpClientModule} from '@angular/common/http';
import {MatchService} from './matches/shared/match.service';
import {PlayerService} from './players/shared/player.service';
import {MatchHistoryComponent} from './matches/match-history/match-history.component';
import {StompConfig, StompService} from '@stomp/ng2-stompjs';

import * as SockJS from 'sockjs-client';
import {ChatComponent} from './chat/chat.component';
import {ChatService} from './chat/chat.service';
import {TeamRankingComponent} from './statistics/team-ranking/team-ranking.component';
import {StatisticService} from './statistics/shared/statistic.service';
import {PlayerRankingComponent} from './statistics/player-ranking/player-ranking.component';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import {CdkTableModule} from '@angular/cdk/table';
import {QuickMatchComponent} from './matches/quick-match/quick-match.component';
import {StatisticComponent} from './statistics/statistic/statistic.component';
import {AdminComponent} from './admin/admin.component';
import { PlayerComponent } from './players/player/player.component';
import { TopPlayersComponent } from './statistics/top-players/top-players.component';
import { EloSimulationComponent } from './elo/elo-simulation/elo-simulation.component';
import {EloService} from './elo/shared/elo.service';
import {registerLocaleData} from '@angular/common';
import localeDECH from '@angular/common/locales/de-CH';

registerLocaleData(localeDECH);

export function socketProvider() {
/*  return new SockJS('http://localhost:8088/socket');*/
  return new SockJS('http://172.19.52.123:8088/socket');
}

const stompConfig: StompConfig = {
  // Which server?
  url: socketProvider,

  // Headers
  // Typical keys: login, passcode, host
  headers: {
    login: '',
    passcode: ''
  },

  // How often to heartbeat?
  // Interval in milliseconds, set to 0 to disable
  heartbeat_in: 0, // Typical value 0 - disabled
  heartbeat_out: 20000, // Typical value 20000 - every 20 seconds

  // Wait in milliseconds before attempting auto reconnect
  // Set to 0 to disable
  // Typical value 5000 (5 seconds)
  reconnect_delay: 5000,

  // Will log diagnostics on console
  debug: true
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewMatchComponent,
    RandomPlayerSelectorDialogComponent,
    MatchHistoryComponent,
    ChatComponent,
    TeamRankingComponent,
    PlayerRankingComponent,
    QuickMatchComponent,
    StatisticComponent,
    /*AdminComponent,
    PlayerComponent,
    TopPlayersComponent,*/
    EloSimulationComponent
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
    MatTableModule,
    MatSortModule,
    MatExpansionModule,
    CdkTableModule,
    RoundProgressModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [MatchService, PlayerService, ChatService, StatisticService, StompService, EloService,
    {
      provide: StompConfig,
      useValue: stompConfig
    },
    {provide: LOCALE_ID, useValue: 'de-CH'}
    ],
  bootstrap: [AppComponent],
  entryComponents: [RandomPlayerSelectorDialogComponent]
})
export class AppModule {
}
