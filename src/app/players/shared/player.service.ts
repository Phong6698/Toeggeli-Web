import { Injectable } from '@angular/core';
import {Player} from './player.model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PlayerService {

  playersMock = [
    {id: 1, name: 'Carsten'},
    {id: 2, name: 'Lars'},
    {id: 3, name: 'Dani'},
    {id: 4, name: 'Marcel'},
    {id: 5, name: 'Rene'},
    {id: 6, name: 'Ueli'},
    {id: 7, name: 'Sven'},
    {id: 8, name: 'Simon'},
    {id: 9, name: 'Peter'},
    {id: 10, name: 'Phong'},
  ];


  contructor() {

  }

  getPlayers(): Observable<Player[]> {
    return of(this.playersMock);
  }

  addPlayer(player: Player): Observable<Player> {
    this.playersMock.push(player);
    return of(player);
  }
}
