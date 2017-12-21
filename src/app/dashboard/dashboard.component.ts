import {Component, OnInit} from '@angular/core';
import {MatchService} from '../matches/shared/match.service';
import {Match} from '../matches/shared/match.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {

  matches: Match[] = [];

  constructor(private matchService: MatchService) {

  }

  ngOnInit(): void {
    this.getMatches();

  }


  getMatches() {
    this.matchService.getMatches().subscribe(matches => {
      this.matches = matches;
    });
  }
}
