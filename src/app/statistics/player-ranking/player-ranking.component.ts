import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {StatisticService} from '../shared/statistic.service';
import {Statistic} from '../shared/statistic.model';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-player-ranking',
  templateUrl: 'player-ranking.component.html',
  styleUrls: ['player-ranking.component.scss']
})

export class PlayerRankingComponent implements OnInit {

  @Input() top: number;
  @Input() sortBy: string;

  title = 'Player Ranking';

  displayedColumns = ['player', 'wins', 'losses', 'winrate', 'matches'];
  dataSource: MatTableDataSource<Statistic>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private statisticService: StatisticService) {
  }

  ngOnInit(): void {
    this.getPlayerRanking();
  }

  getPlayerRanking() {
    this.statisticService.getPlayerRanking().subscribe(statistics => {
      this.setDataSource(statistics);
    });
  }

  setDataSource(statistics) {
    const statisticList = [];
    for (const stat of statistics) {
      const matches = stat.losses + stat.wins;
      const winrate = (100 / matches) * stat.wins;
      statisticList.push({player: stat.player.name, wins: stat.wins, losses: stat.losses, winrate: winrate, matches: matches});
    }

    if (this.top != null && this.sortBy != null) {
      if (this.sortBy === 'player') {
        statisticList.sort((a, b): any => {
          if (a.player < b.player) {return 1; }
          if (a.player > b.player) {return -1; }
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
      this.title = `Top ${this.top} players by ${this.sortBy}`;

      const statisticFilteredList = statisticList.filter(stat => stat.matches > 4);
      statisticFilteredList.splice(this.top);
      this.dataSource = new MatTableDataSource(statisticFilteredList);
      this.dataSource.sort = this.sort;
      this.dataSource.sort.disabled = true;
    } else {
      this.dataSource = new MatTableDataSource(statisticList);
      this.dataSource.sort = this.sort;
    }
  }
}
