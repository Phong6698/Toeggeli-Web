import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Statistic} from './statistic.model';

@Injectable()
export class StatisticService {
  private statisticUrl = `${environment.restApiURL}/statistik`;

  constructor(private http: HttpClient) {
  }

  getTeamRanking(): Observable<Statistic[]> {
    const url = `${this.statisticUrl}/ranking/team`;
    return this.http.get<Statistic[]>(url).pipe(catchError(this.handleError));
  }

  getPlayerRanking(): Observable<Statistic[]> {
    const url = `${this.statisticUrl}/ranking/player`;
    return this.http.get<Statistic[]>(url).pipe(catchError(this.handleError));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
