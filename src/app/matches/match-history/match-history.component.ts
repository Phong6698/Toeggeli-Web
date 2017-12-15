import {Component, OnInit} from '@angular/core';
import {MatchService} from '../shared/match.service';
import {Match} from '../shared/match.model';

@Component({
  selector: 'app-match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.scss'],
})
export class MatchHistoryComponent implements OnInit {

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

    // TODO Sortiering -> Datum fehlt noch
  }

}
