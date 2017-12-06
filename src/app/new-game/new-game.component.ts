import {Component, OnInit} from '@angular/core';

import {trigger, style, transition, animate, keyframes, query, stagger, state, useAnimation} from '@angular/animations';
import {bounceInDown, bounceOutUp} from 'ng-animate/lib';


@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss'],
  animations: [
    trigger('addBounceAnimation', [
      transition('void => *', useAnimation(bounceInDown)),
      transition('* => void', useAnimation(bounceOutUp))
    ]),
  ],
})

export class NewGameComponent implements OnInit {

  newPlayer = '';

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

  addNewPlayer() {
    this.players.push({name: this.newPlayer});
    this.newPlayer = '';
  }
}

