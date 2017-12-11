import {Component, OnInit} from '@angular/core';

import {trigger, style, transition, animate, keyframes, query, stagger, state, useAnimation} from '@angular/animations';
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
import {Team} from '../../teams/shared/team.model';


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

  team1 = new Team();
  team2 = new Team();

  player1: Player = null;
  player2: Player = null;
  player3: Player = null;
  player4: Player = null;

  score1: number;
  score2: number;

  isResultState = false;

  points = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  ];

  constructor(private playerService: PlayerService, private matchService: MatchService) {
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
    })
    this.newPlayer = '';
    this.sortPlayers();
  }

  addNewMatch(): void {
    const match = new Match();

    //TODO Alles noch mit ngModel match
    //Richtig hässlich
    this.team1.player1 = this.player1;
    this.team1.player2 = this.player2;
    this.team2.player1 = this.player3;
    this.team2.player2 = this.player4;
    match.team1 = this.team1;
    match.team2 = this.team2;
    match.score1 = this.score1;
    match.score2 = this.score2;

    this.matchService.addMatch(match).subscribe(() => {
      //TODO start animation and go to dashboard
      console.log('Match saved');
    });
  }


  //TODO nicht player aus der liste löschen...
  addPlayerToTeam(player): void {
    if (this.player1 == null) {
      this.player1 = player;
      this.players.splice(this.players.indexOf(player), 1);
    } else if (this.player2 == null) {
      this.player2 = player;
      this.players.splice(this.players.indexOf(player), 1);
    }else if (this.player3 == null) {
      this.player3 = player;
      this.players.splice(this.players.indexOf(player), 1);
    }else if (this.player4 == null) {
      this.player4 = player;
      this.players.splice(this.players.indexOf(player), 1);
    }
  }

  addPlayerToTeamRandom(): void {
    if (this.player1 == null) {
      this.player1 = this.getRandomPlayer();
      this.players.splice(this.players.indexOf(this.player1), 1);
    }
    if (this.player2 == null) {
      this.player2 = this.getRandomPlayer();
      this.players.splice(this.players.indexOf(this.player2), 1);
    }
    if (this.player3 == null) {
      this.player3 = this.getRandomPlayer();
      this.players.splice(this.players.indexOf(this.player3), 1);
    }
    if (this.player4 == null) {
      this.player4 = this.getRandomPlayer();
      this.players.splice(this.players.indexOf(this.player4), 1);
    }
  }

  getRandomPlayer(): Player {
    const randomIndex = Math.floor((Math.random() * this.players.length));
    return this.players[randomIndex];
  }

  deletePlayerFromTeam(player): void {
    if (!this.isResultState) {
      this.players.push(player);
      this.sortPlayers();
      player = null;
    }

  }

  onTeam1PointChange() {
    if (this.score1 !== 10) {
      this.score2 = 10;
    }
  }

  onTeam2PointChange() {
    if (this.score2 !== 10) {
      this.score1 = 10;
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

