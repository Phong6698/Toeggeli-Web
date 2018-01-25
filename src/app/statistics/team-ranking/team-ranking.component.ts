import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {StatisticService} from '../shared/statistic.service';
import {Statistic} from '../shared/statistic.model';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-team-ranking',
  templateUrl: 'team-ranking.component.html'
})

export class TeamRankingComponent implements OnInit {

  @Input() top: number;
  @Input() sortBy: string;

  title = 'Team Ranking';

  displayedColumns = ['team', 'wins', 'losses', 'winrate', 'matches'];
  dataSource: MatTableDataSource<Statistic>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private statisticService: StatisticService) {
  }

  ngOnInit(): void {
    this.getTeamRanking();
  }

  getTeamRanking() {
    this.statisticService.getTeamRanking().subscribe(statistics => {
      this.setDataSource(statistics);
    });
  }

  setDataSource(statistics) {
    const statisticList = [];
    for (const stat of statistics) {
      const teamName = `${stat.team.player1.name} & ${stat.team.player2.name}`;
      const matches = stat.losses + stat.wins;
      const winrate = (100 / matches) * stat.wins;
      statisticList.push({team: teamName, wins: stat.wins, losses: stat.losses, winrate: winrate, matches: matches});
    }

    if (this.top != null && this.sortBy != null) {
      if (this.sortBy === 'team') {
        statisticList.sort((a, b): any => {
          if (a.team < b.team) {return 1; }
          if (a.team > b.team) {return -1; }
        });
      } else if (this.sortBy === 'wins') {
        statisticList.sort((a, b): any => {
          if (a.wins < b.wins) {return 1; }
          if (a.wins > b.wins) {return -1; }
        });
      } else if (this.sortBy === 'losses') {
        statisticList.sort((a, b): any => {
          if (a.losses < b.losses) {return 1; }
          if (a.losses > b.losses) {return -1; }
        });
      } else if (this.sortBy === 'winrate') {
        statisticList.sort((a, b): any => {
          if (a.winrate < b.winrate) {return 1; }
          if (a.winrate > b.winrate) {return -1; }
        });
      } else if (this.sortBy === 'matches') {
        statisticList.sort((a, b): any => {
          if (a.matches < b.matches) {return 1; }
          if (a.matches > b.matches) {return -1; }
        });
      }
      this.title = `Top ${this.top} teams by ${this.sortBy}`;

      statisticList.splice(this.top);
      this.dataSource = new MatTableDataSource(statisticList);
      this.dataSource.sort = this.sort;
      this.dataSource.sort.disabled = true;
    } else {
      this.dataSource = new MatTableDataSource(statisticList);
      this.dataSource.sort = this.sort;
    }
  }
}
