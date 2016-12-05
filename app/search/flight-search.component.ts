/* 

Server-side filtering component. With a large number of flights we have the choice of
retrierving all for a potentially big slug of not-used data vs multiple small requests 
delivering a stream of Observables.

Client-side filtering is handled by the flight-service component.

*/

import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';

import { Subject }           from 'rxjs/Subject';

import { FlightSearchService } from './flight-search.service';
import { Flight } from '../entities/flight';

@Component({
  moduleId: module.id,
  selector: 'flight-search',
  templateUrl: 'flight-search.component.html',
  styleUrls: [ 'flight-search.component.css' ],
  providers: [FlightSearchService]
})

export class FlightSearchComponent implements OnInit {

  flights: Observable<Flight[]>;

  private searchTerms = new Subject<string>();

  constructor(
    private flightSearchService: FlightSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.flights = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        ? this.flightSearchService.search(term) // return the http search observable
        : Observable.of<Flight[]>([]))          // or the observable of empty heroes if no search term
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Flight[]>([]);
      });
  }

  gotoDetail(flight: Flight): void {
    let link = ['/detail', flight.id];
    this.router.navigate(link);
  }
}
