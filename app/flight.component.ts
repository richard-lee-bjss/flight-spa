import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Flight } from './entities/flight';
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
            .then(flights => this.flights = flights);
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

        if (value.length <= 0) {
            return;
        }

        value = value.toUpperCase();

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
