import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Flight } from './entities/flight';
import { FlightsService } from './flights.service';

@Component({
    moduleId: module.id,
    selector: 'my-flights',
    templateUrl: 'flights.component.html',
    styleUrls: [ 'flights.component.css' ],
    providers: [FlightsService]
})

export class FlightsComponent implements OnInit {

    flights: Flight[] = [];
    searchResults: Flight[] = [];
    selectedFlight: Flight;

    constructor(
        private router: Router,
        private flightService: FlightsService) { }

    ngOnInit() {
        this.getFlights();
    }

    getFlights(): void {

        this.flightService.getFlights()
            .then(flights => this.flights = flights);
    }

    onSelect(flight: Flight) {
        this.selectedFlight = flight;
    }

    search(value: string): void {

        // clear the details div when a fresh search is started.
        this.selectedFlight = null;

        this.searchResults = [];
        value = value.toUpperCase();

        if (value.length <= 0) {
            return;
        }

        for (let flight of this.flights) {
            // search for id
            if (flight.id.toUpperCase().indexOf(value) !== -1) {
                this.searchResults.push(flight);
                continue;
            }
            // search for departure airport
            if (flight.departureAirport.toUpperCase().indexOf(value) !== -1) {
                this.searchResults.push(flight);
                continue;
            }
            // search for departure airport code
            if (flight.departureAirportCode.toUpperCase().indexOf(value) !== -1) {
                this.searchResults.push(flight);
                continue;
            }
            // search for arrival airport
            if (flight.arrivalAirport.toUpperCase().indexOf(value) !== -1) {
                this.searchResults.push(flight);
                continue;
            }
            // search for arrival airport code
            if (flight.arrivalAirportCode.toUpperCase().indexOf(value) !== -1) {
                this.searchResults.push(flight);
                continue;
            }
            // search for departure terminal
            if (flight.depTerminalName.toUpperCase().indexOf(value) !== -1) {
                this.searchResults.push(flight);
                continue;
            }
        }


    }
}
