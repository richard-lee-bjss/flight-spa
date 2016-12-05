import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Flight } from './entities/flight';
import { FlightService } from './flight.service';

import {InMemoryDataService} from './in-memory-data.service';

@Component({
    moduleId: module.id,
    selector: 'my-flights',
    templateUrl: 'flight.component.html',
    providers: [ FlightService ]
})

export class FlightComponent implements OnInit {

    flights: Flight[] = [];
    searchResults: Flight[] = [];
    selectedFlight: Flight;

    constructor(
        private router: Router,
        private flightService: FlightService) { }

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

    gotoDetail(id: string): void {
        this.router.navigate(['/detail', id]);
    }

    search(value: string): void {

            this.searchResults = [];
            value = value.toUpperCase();

            if (value.length <= 0) {
                return;
            }

        for (let flight of this.flights) {
            // search for id
            if (flight.id.toUpperCase().indexOf(value) !== -1 ) {
                this.searchResults.push(flight);
                continue;
            }
            // search for departure airport
            if (flight.departureAirport.toUpperCase().indexOf(value) !== -1 ) {
                this.searchResults.push(flight);
                continue;
            }
            // search for departure airport code
            if (flight.departureAirportCode.toUpperCase().indexOf(value) !== -1 ) {
                this.searchResults.push(flight);
                continue;
            }
            // search for arrival airport
            if (flight.arrivalAirport.toUpperCase().indexOf(value) !== -1 ) {
                this.searchResults.push(flight);
                continue;
            }
            // search for arrival airport code
            if (flight.arrivalAirportCode.toUpperCase().indexOf(value) !== -1 ) {
                this.searchResults.push(flight);
                continue;
            }
            // search for departure terminal
            if (flight.depTerminalName.toUpperCase().indexOf(value) !== -1 ) {
                this.searchResults.push(flight);
                continue;
            }
        }


    }
}
