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
        }
    }
}
