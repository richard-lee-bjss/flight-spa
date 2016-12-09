import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Flight } from './models/flight';

@Injectable()
export class FlightService {

    private flightsUrl = 'http://ejtestbed.herokuapp.com/flights'; // URL to web api

    constructor(private http: Http) { }

    getFlight(id: string): Promise<Flight> {

        /* I realise I'm calling out twice - once for the full list and then once for the details. 
        I'd like to get the detailfromform the flights stored on the flightComponent, but can't see how to get the id param out from 
        */

        return this.getFlights()
            .then(flights => flights.find(flight => flight.id === id));
    }

    getFlights(): Promise<Flight[]> {

        return this.http
            .get(this.flightsUrl)
            .toPromise()
            .then(response => response.json() as Flight[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
