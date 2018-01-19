import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {StatisticService} from '../shared/statistic.service';
import {Statistic} from '../shared/statistic.model';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-team-ranking',
  templateUrl: 'team-ranking.component.html'
})

export class TeamRankingComponent implements OnInit {

  // TODO Top 5
  // TODO Choose what to display
  displayedColumns = ['team', 'wins', 'losses', 'winrate', 'matches'];
  dataSource: MatTableDataSource<Statistic>;


  // FIXME Sortheader doesn't work
/*  @ViewChild(MatSort) sort: MatSort;

  /!**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   *!/
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }*/

  constructor(private statisticService: StatisticService) {
  }

  ngOnInit(): void {
    this.getTeamRanking();
  }


  getTeamRanking() {
    this.statisticService.getTeamRanking().subscribe(statistics => {
      this.dataSource = new MatTableDataSource(statistics);
    });
  }
}
