import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Flight } from './models/flight';
import { FlightService } from './flight.service';

@Component({
    moduleId: module.id,
    selector: 'my-flights',
    templateUrl: 'flight.component.html',
    styleUrls: ['flight.component.css']
})

export class FlightComponent implements OnInit {

    private flights: Flight[] = [];
    private searchResults: Flight[] = [];
    private selectedFlight: Flight;

    constructor(
        private router: Router,
        private flightService: FlightService) { }

    ngOnInit() {
        this.getFlights();
    }

    getFlight(id: string): Flight {

        return this.flights.find(f => f.id === id);
    }

    private getFlights(): void {

        this.flightService.getFlights()
            .then(flights => this.flights = flights)
            .then(flights => this.searchResults = flights); // make the list of all flights visible on startup
    }

    onSelect(flight: Flight) {
        this.selectedFlight = flight;
    }

    gotoDetail() {
        this.router.navigate(['./detail', this.selectedFlight.id]);
    }

    search(value: string): void {

        // clear the details when a fresh search is started.
        this.selectedFlight = null;
        this.searchResults = [];

        value = value.toUpperCase();

        for (let flight of this.flights) {
            // search for id
            if (flight.id.toUpperCase().indexOf(value) !== -1) {
                this.searchResults.push(flight);
                continue;
            }
            // search for flight number
            if (flight.flightNumber.number === +value) {
                this.searchResults.push(flight);
                continue;
            }
            // search for departure airport
            if (flight.departureAirport.toUpperCase().indexOf(value) !== -1) {
                this.searchResults.push(flight);
                continue;
            }
            // search for arrival airport
            if (flight.arrivalAirport.toUpperCase().indexOf(value) !== -1) {
                this.searchResults.push(flight);
                continue;
            }
        }
        //  default is to show all flights
        if (value.length <= 0 && this.searchResults.length === 0)  {
            this.searchResults = this.flights.slice();
        }
    }
}
