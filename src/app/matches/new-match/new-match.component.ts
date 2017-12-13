import {Component, OnInit} from '@angular/core';

import {trigger, transition, useAnimation} from '@angular/animations';
import {
  bounceInDown,
  bounceOutUp,
  slideInRight,
  slideOutRight,
  slideInLeft,
  slideOutLeft,
  slideOutUp,
  fadeInUp
} from 'ng-animate';
import {PlayerService} from '../../players/shared/player.service';
import {MatchService} from '../shared/match.service';
import {Player} from '../../players/shared/player.model';
import {Match} from '../shared/match.model';

@Component({
  selector: 'app-new-match',
  templateUrl: './new-match.component.html',
  styleUrls: ['./new-match.component.scss'],
  animations: [
    trigger('addBounceAnimation', [
      transition('void => *', useAnimation(bounceInDown)),
      transition('* => void', useAnimation(bounceOutUp))
    ])
    ,
    trigger('showPlayerColumn', [
      transition('void => *', useAnimation(slideInRight, {
        params: {timing: 0.3, fromOpacity: 0}
      }))
    ]),
    trigger('hidePlayerColumn', [
      transition('* => void', useAnimation(slideOutRight, {
        params: {timing: 0.3, toOpacity: 0}
      }))
    ]),
    trigger('showMatchColumn', [
      transition('void => *', useAnimation(slideInLeft, {
        params: {timing: 0.3, fromOpacity: 0}
      }))
    ]),
    trigger('hideMatchColumn', [
      transition('* => void', useAnimation(slideOutUp, {
        params: {timing: 0.3, toOpacity: 0}
      }))
    ]),
    trigger('showPoints', [
      transition('void => *', useAnimation(fadeInUp), {
        params: {timing: 0.8}
      })
    ])
  ],
})

export class NewMatchComponent implements OnInit {

  newPlayer = '';

  players: Player[];

  match: Match;

  isResultState = false;

  points = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  ];

  constructor(private playerService: PlayerService, private matchService: MatchService) {
    this.match = new Match();
  }


  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers(): void {
    this.playerService.getPlayers().subscribe(players => this.players = players);
    this.sortPlayers();
  }

  addNewPlayer() {
    this.playerService.addPlayer({id: null, name: this.newPlayer}).subscribe(player => {
      /*this.players.push(player);*/
      this.newPlayer = '';
      this.sortPlayers();
    });
  }

  addNewMatch(): void {
    this.matchService.addMatch(this.match).subscribe(() => {
      //TODO start animation and go to dashboard
      console.log('Match saved');
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
    } else {
    }
  }

  isPlayerInTeam(player: Player): boolean {
    if (this.match.team1.player1 === player ||
      this.match.team1.player2 === player ||
      this.match.team2.player1 === player ||
      this.match.team2.player2 === player) {
      return true;
    } else {
      return false;
    }
  }

  addPlayerToTeamRandom(): void {
    for (let i = 0; i < 4; i++) {
      let player: Player;
      do {
        player = this.getRandomPlayer();
      } while (this.isPlayerInTeam(player));
      this.addPlayerToTeam(player);
    }
  }

  getRandomPlayer(): Player {
    const randomIndex = Math.floor((Math.random() * this.players.length));
    return this.players[randomIndex];
  }

  onTeam1PointChange() {
    if (this.match.score1 !== 10) {
      this.match.score2 = 10;
    }
  }

  onTeam2PointChange() {
    if (this.match.score2 !== 10) {
      this.match.score1 = 10;
    }
  }

  sortPlayers() {
    this.players.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }

}

