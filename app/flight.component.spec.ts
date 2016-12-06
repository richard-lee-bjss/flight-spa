/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FlightComponent } from './flight.component';

import { FlightService } from './flight.service';
import { FakeFlightService } from './fake-flight.service';
import { Router } from '@angular/router';
import { RouterStub } from './test/router-stub';

////////  SPECS  /////////////
describe('FlightsComponent', function () {
    let de: DebugElement;
    let comp: FlightComponent;
    let fixture: ComponentFixture<FlightComponent>;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            declarations: [FlightComponent],
            providers: [
                { provide: FlightService, useClass: FakeFlightService },
                { provide: Router, useClass: RouterStub }]
        })
            .compileComponents();

    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FlightComponent);
        comp = fixture.componentInstance;
    });

    it('should create component', () => expect(comp).toBeDefined());

    // it('should load flights on initialisation2', () => {
    //     comp.getFlights();
    //     expect(comp.flights.length).toBeGreaterThan(0,
    //         'should load flights on initialisation');
    //     });
    // });

    //   it('should have expected <h1> text', () => {
    //     fixture.detectChanges();
    //     const h1 = de.nativeElement;
    //     expect(h1.innerText).toMatch(/flight info/i,
    //       '<h1> should say something about "Flight Info"');
    //   });
});
