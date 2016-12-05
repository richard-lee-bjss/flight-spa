import { Injectable }       from '@angular/core';
import { Http, Response }   from '@angular/http';

import { Observable }   from 'rxjs';

import { Flight }   from '../entities/flight';

@Injectable()
export class FlightSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Flight[]> {
    return this.http
        .get(`ejtestbed.herokuapp.com/flights/?name=${term}`)
        .map((r: Response) => r.json().data as Flight[]);
  }
}
