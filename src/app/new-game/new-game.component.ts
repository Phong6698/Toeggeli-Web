import {Component, OnInit} from '@angular/core';

import {trigger, transition, useAnimation, style, animate} from '@angular/animations';
import {bounceInDown} from 'ng-animate/lib';


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

  team1 = [

  ];

  team2 = [

  ];

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
      this.team1.push(player);
      this.players.splice(this.players.indexOf(player), 1);
    } else if (this.team2.length !== 2) {
      this.team2.push(player);
      this.players.splice(this.players.indexOf(player), 1);
    }
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

  animate(name: 'string') {
    this.bounceInDown = 'bounceInDown';
  }

}
