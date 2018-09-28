import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class EloService {

  private eloUrl = `${environment.restApiURL}/elo`;

  constructor(private http: HttpClient) {
  }

  getSimulation(): Observable<any> {
    const url = `${this.eloUrl}/simulate`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
