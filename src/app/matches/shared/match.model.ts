import {Team} from '../../teams/shared/team.model';

export class Match {
  id: number;
  team1: Team;
  team2: Team;
  score1: number;
  score2: number;
  datum: string;


  constructor() {
    this.team1 = new Team();
    this.team2 = new Team();
  }
}
