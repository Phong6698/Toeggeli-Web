import {Injectable} from '@angular/core';
import {Match} from './match.model';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class MatchService {
  private matchUrl = `${environment.restApiURL}/match`;

  constructor(private http: HttpClient) {
  }

  addMatch(match: Match): Observable<Match> {
    return this.http.post<Match>(this.matchUrl, match, httpOptions).pipe(catchError(this.handleError));
  }

  getMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(this.matchUrl).pipe(catchError(this.handleError));
  }

  getMatchById(id: number): Observable<Match> {
    return this.http.get<Match>(`${this.matchUrl}/${id}`).pipe(catchError(this.handleError));
  }

  deleteMatchById(id: number): Observable<any> {
    return this.http.delete(`${this.matchUrl}/${id}`, httpOptions).pipe(catchError(this.handleError));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
