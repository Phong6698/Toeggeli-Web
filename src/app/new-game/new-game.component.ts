import {Component, Inject, OnInit} from '@angular/core';

import {trigger, transition, useAnimation, style, animate} from '@angular/animations';
import {bounceInDown} from 'ng-animate/lib';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss'],
  animations: [
    trigger('bounceInDown', [transition('* => *', useAnimation(bounceInDown))]),
  ],
})

export class NewGameComponent implements OnInit {

  bounceInDown: any;

  newPlayer: string;

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

  constructor(public dialog: MatDialog) {
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
    this.newPlayer = null;
  }

  animate(name: 'string') {
    this.bounceInDown = 'bounceInDown';
  }
}

