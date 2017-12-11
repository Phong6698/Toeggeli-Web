import {Team} from '../../teams/shared/team.model';

export class Match {
  id: number;
  team1: Team;
  team2: Team;
  score1: number;
  score2: number;
  datum: string;

}
