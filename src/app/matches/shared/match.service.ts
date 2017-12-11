import { Injectable } from '@angular/core';
import {Match} from './match.model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MatchService {

  matchesMock: Match[] = [];


  contructor() {
  }

  addMatch(match: Match): Observable<Match> {
    this.matchesMock.push(match);
    console.log(this.matchesMock);
    return of(match);
  }
}
