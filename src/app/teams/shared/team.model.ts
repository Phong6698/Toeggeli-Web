import {Player} from '../../players/shared/player.model';

export class Team {
  id: number;
  player1: Player;
  player2: Player;


  constructor() {
    this.player1 = null;
    this.player2 = null;
  }
}
