import {Component, OnInit} from '@angular/core';
import {MatchService} from '../shared/match.service';
import {Match} from '../shared/match.model';
import {PlayerService} from '../../players/shared/player.service';
import {Player} from '../../players/shared/player.model';
import {trigger, transition, useAnimation} from '@angular/animations';
import {bounceOutUp, bounceInDown} from 'ng-animate';

@Component({
  selector: 'app-quick-match',
  templateUrl: './quick-match.component.html',
  styleUrls: ['quick-match.component.scss'],
  animations: [
    trigger('addBounceAnimation', [
      transition('void => *', useAnimation(bounceInDown)),
      transition('* => void', useAnimation(bounceOutUp))
    ])
  ]
})
export class QuickMatchComponent implements OnInit {

  toggled: boolean;

  match: Match;

  players: Player[];

  points: any;

  constructor(private playerService: PlayerService, private matchService: MatchService) {
    this.match = new Match();
    this.players  = [];
    this.points = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ];
    this.toggled = false;
  }

  ngOnInit(): void {
    this.getPlayers();
  }

  newQuickMatch() {
    this.toggled = true;
    this.addPlayerToTeamRandomly(this.players);
  }

  getPlayers(): void {
    this.playerService.getPlayers().subscribe(players => {
      this.players = players;
    });
  }

  addNewMatch(): void {
    this.matchService.addMatch(this.match).subscribe(() => {
      // TODO start animation
      console.log('Match saved');
      this.toggled = false;
    });
  }

  addPlayerToTeam(player): void {
    if (this.match.team1.player1 == null) {
      this.match.team1.player1 = player;
    } else if (this.match.team1.player2 == null) {
      this.match.team1.player2 = player;
    } else if (this.match.team2.player1 == null) {
      this.match.team2.player1 = player;
    } else if (this.match.team2.player2 == null) {
      this.match.team2.player2 = player;
    }
  }

  addPlayerToTeamRandomly(players: Player[]): void {
    const i = players.length;
    for (let count = 0; count < i; count++) {
      let player;
      player = this.getRandomPlayer(players);
      this.addPlayerToTeam(player);
      players.splice(players.indexOf(player), 1);
    }
  }

  getRandomPlayer(players: Player[]): Player {
    const randomIndex = Math.floor((Math.random() * players.length));
    return players[randomIndex];
  }

  onTeam1PointChange() {
    if (this.match.score1 !== 10) {
      this.match.score2 = 10;
    } else if (this.match.score1 === 10 && this.match.score2 === 10) {
      this.match.score2 = null;
    }
  }

  onTeam2PointChange() {
    if (this.match.score2 !== 10) {
      this.match.score1 = 10;
    } else if (this.match.score2 === 10 && this.match.score1 === 10) {
      this.match.score1 = null;
    }
  }

}
