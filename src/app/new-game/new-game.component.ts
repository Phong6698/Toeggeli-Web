import {Component, OnInit} from '@angular/core';

import {trigger, style, transition, animate, keyframes, query, stagger, state, useAnimation} from '@angular/animations';
import {
  bounceInDown,
  bounceOutUp,
  flipInY,
  flipOutY,
  fadeInRight,
  fadeOutRight,
  slideInRight,
  slideOutRight,
  slideInLeft,
  slideOutLeft,
  slideOutUp,
  fadeInUp
} from 'ng-animate';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss'],
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
    trigger('showGameColumn', [
      transition('void => *', useAnimation(slideInLeft, {
        params: {timing: 0.3, fromOpacity: 0}
      }))
    ]),
    trigger('hideGameColumn', [
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

export class NewGameComponent implements OnInit {

  newPlayer = '';

  isResultState = false;

  players = [
    {name: 'Carsten'},
    {name: 'Lars'},
    {name: 'Dani'},
    {name: 'Marcel'},
    {name: 'Rene'},
    {name: 'Ueli'},
    {name: 'Sven'},
    {name: 'Simon'},
    {name: 'Peter'},
    {name: 'Phong'},
  ];

  team1 = [];
  team2 = [];

  points = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  ];

  team1Points: number;
  team2Points: number;

  constructor() {
  }


  ngOnInit(): void {
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

  addPlayerToTeam(player): void {
    if (this.team1.length !== 2) {
      this.movePlayerToTeam(player, this.team1);
    } else if (this.team2.length !== 2) {
      this.movePlayerToTeam(player, this.team2);
    }
  }

  addPlayerToTeamRandom(): void {
    while (this.team1.length < 2) {
      const randomIndex = Math.floor((Math.random() * this.players.length));
      this.movePlayerToTeam(this.players[randomIndex], this.team1);
    }
    while (this.team2.length < 2) {
      const randomIndex = Math.floor((Math.random() * this.players.length));
      this.movePlayerToTeam(this.players[randomIndex], this.team2);
    }
  }

  movePlayerToTeam(player, team): void {
    team.push(player);
    this.players.splice(this.players.indexOf(player), 1);
  }

  deletePlayerFromTeam(player, team): void {
    if (!this.isResultState) {
      this.players.push(player);
      this.players.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });

      team.splice(team.indexOf(player), 1);
    }

  }

  addNewPlayer() {
    this.players.push({name: this.newPlayer});
    this.newPlayer = '';
  }
  onTeam1PointChange() {
    if (this.team1Points !== 10) {
      this.team2Points = 10;
    }
  }

  onTeam2PointChange() {
    if (this.team2Points !== 10) {
      this.team1Points = 10;
    }
  }

}

