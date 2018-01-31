import {Component, Input, OnInit} from '@angular/core';
import {MatchService} from '../shared/match.service';
import {Match} from '../shared/match.model';

@Component({
  selector: 'app-match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.scss'],
})
export class MatchHistoryComponent implements OnInit {

  @Input() amount: number;
  matches: Match[] = [];

  constructor(private matchService: MatchService) {
  }

  ngOnInit(): void {
    this.getMatches();
  }

  getMatches() {
    this.matchService.getMatches().subscribe(matches => {
      this.matches = matches.reverse();
      if (this.amount > 0) {
        this.matches.splice(this.amount);
      }
    });

    // TODO Sortiering -> Datum fehlt noch
  }

}
