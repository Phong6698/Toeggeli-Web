import {Injectable} from '@angular/core';
import {Player} from './player.model';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class PlayerService {

  private playerUrl = `${environment.restApiURL}/player`;

  constructor(private http: HttpClient) {
  }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.playerUrl).pipe(
      catchError(this.handleError)
    );
  }

  addPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(this.playerUrl, player, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
