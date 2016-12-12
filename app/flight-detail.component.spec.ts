/* tslint:disable:no-unused-variable */
import { async, fakeAsync, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SpyLocation } from '@angular/common/testing';

import { FlightDetailComponent } from './flight-detail.component';

import { FlightService } from './flight.service';
import { FakeFlightService } from './test/fake-flight.service';
import { ActivatedRoute, Params } from '@angular/router';

import { RouterStub } from './test/router-stub';
import { Location } from '@angular/common';
import { LocationStub } from './test/location-stub';

import { FLIGHTS } from './test/test-flightsJSON';

////////  SPECS  /////////////
describe('FlightDetailComponent', function () {
    let comp: FlightDetailComponent;
    let fixture: ComponentFixture<FlightDetailComponent>;

    let fakeFlightService: FlightService;
    let fakeActivatedRoute: RouterStub;
    let fakeLocation: LocationStub;

    beforeEach(() => {
        fakeActivatedRoute = new RouterStub();
        fakeLocation = new LocationStub();

        fakeActivatedRoute.testParams = { id: 'EZ001Test' };
    });

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            declarations: [FlightDetailComponent],
            providers: [
                { provide: FlightService, useClass: FakeFlightService },
                { provide: ActivatedRoute, useValue: fakeActivatedRoute },
                { provide: Location, useValue: fakeLocation }]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FlightDetailComponent);
        comp = fixture.componentInstance;

        fakeFlightService = TestBed.get(FlightService);
    });

    it('should create component', () => expect(comp).toBeDefined());

    it('should call the flight service on initialisation', () => {

        /* should 
        1. get the flight id from the router params
        2. call flight service to get (test) data, and
        3. set the flight member.
        For this test I'm leaving the flight member public so checking
        it is simple. The point of this test is to show how a router 
        can be stubbed out so the routing on a component can be tested.
        (The FlightComponent unit test shows an example of
        checking the rendered page for state values when the members are 
        private).
        */
        const serviceSpy = spyOn(fakeFlightService, 'getFlight')
            .and.returnValue(Promise.resolve(FLIGHTS[0]));

        // expect fake service to have been called once
        // comp.ngOnInit(); is automatically called on instantiation
        fixture.detectChanges();
        expect(serviceSpy.calls.count()).toBe(1, 'getFlight called');
    });

    xit('should set flight details on initialisation', () => {

        // TODO check data on the page
        fail();
    });

    it('should go back to previous page when requested', fakeAsync(() => {

        /* again I'm just testing the method on the class, rather than setting up the UI first
        */
        const locationSpy = spyOn(fakeLocation, 'back');
        comp.goBack();
        expect(locationSpy.calls.count()).toBe(1, 'back called');

    }));

});
