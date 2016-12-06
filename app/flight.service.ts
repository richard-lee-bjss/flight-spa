import { Injectable } from '@angular/core';
import { Http, /* Response, Headers */ } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Flight } from './entities/flight';

@Injectable()
export class FlightService {

    private flightsUrl = 'http://ejtestbed.herokuapp.com/flights'; // URL to web api
    // private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getFlight(id: string): Promise<Flight> {

        return this.getFlights()
            .then(flights => flights.find(flight => flight.id === id));
    }

    getFlights(): Promise<Flight[]> {

        return this.http
            .get(this.flightsUrl)
            .toPromise()
            // .then(response => { console.log(response.json()); return response; })
            .then(response => response.json() as Flight[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
