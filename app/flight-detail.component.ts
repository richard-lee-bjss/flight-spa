import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Flight } from './entities/flight';
import { FlightService } from './flight.service';

import 'rxjs/add/operator/switchMap'; // use with Observable router paramaters

@Component({
    moduleId: module.id,
    selector: 'my-flight-detail',
    templateUrl: 'flight-detail.component.html'
})

export class FlightDetailComponent implements OnInit {

    @Input() flight: Flight;

    constructor(
        private flightService: FlightService,
        private router: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.router.params
            .switchMap((params: Params) => { console.log(params['id']); return this.flightService.getFlight(params['id']); })
            .subscribe(flight => this.flight = flight);
    }

    goBack(): void {
        this.location.back();
    }
}
