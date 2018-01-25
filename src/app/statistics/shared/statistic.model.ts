import {Team} from '../../teams/shared/team.model';
import {Player} from '../../players/shared/player.model';

export class Statistic {

  team: Team;
  player: Player;
  wins: number;
  losses: number;
}
