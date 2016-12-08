/* tslint:disable:no-unused-variable */
import { async, fakeAsync, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SpyLocation } from '@angular/common/testing';

import { FlightComponent } from './flight.component';

import { FlightService } from './flight.service';
import { FakeFlightService } from './test/fake-flight.service';
import { Router } from '@angular/router';
import { RouterStub } from './test/router-stub';

import { FLIGHTS } from './test/test-flightsJSON';

////////  SPECS  /////////////
describe('FlightComponent', function () {
    let de: DebugElement;
    let searchEl: DebugElement;
    let listEls: DebugElement[];
    let comp: FlightComponent;
    let fixture: ComponentFixture<FlightComponent>;
    let fakeService: FlightService;
    let testData = FLIGHTS;

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

        fakeService = TestBed.get(FlightService);
        searchEl = fixture.debugElement.query(By.css('#search-box'));
    });

    it('should create component', () => expect(comp).toBeDefined());

    it('should load flights on initialisation', () => {

        const spy = spyOn(fakeService, 'getFlights')
            .and.returnValue(Promise.resolve(testData));

        // expect fake service to have been called once
        // comp.ngOnInit(); is automatically called on instantiation
        fixture.detectChanges();
        expect(spy.calls.count()).toBe(1, 'getFlights called');
    });

    it('should not display flight numbers for an empty search term (fakeAsync)', fakeAsync(() => {

        // this test case corresponds to deleting serch terms from the search box

        // let service promises be resolved for data via ngOnInit
        fixture.detectChanges();
        tick();
        searchEl.nativeElement.value = '';
        searchEl.triggerEventHandler('keyup', null);
        fixture.detectChanges();
        tick();

        listEls = fixture.debugElement.queryAll(By.css('.badge'));
        expect(listEls.length).toEqual(0,
            'should not display flight numbers for an empty search term (fakeAsync)');

    }));

    it('should display flight numbers for a valid search term (fakeAsync)', fakeAsync(() => {

        // let service promises be resolved for data via ngOnInit
        fixture.detectChanges();
        tick();
        searchEl.nativeElement.value = 'e';
        searchEl.triggerEventHandler('keyup', null);
        fixture.detectChanges();
        tick();

        listEls = fixture.debugElement.queryAll(By.css('.badge'));
        expect(listEls.length).toEqual(8,
            'should display flight numbers for a valid search term (fakeAsync)');
        expect(listEls[0].nativeElement.innerText).toEqual('EZ001Test',
            'element [0] should be "EZ001Test"');
        expect(listEls[7].nativeElement.innerText).toEqual('EZ008',
            'element [7] should be "EZ008"');
    }));

    it('should not display flight numbers for an invalid search term (fakeAsync)', fakeAsync(() => {

        // let service promises be resolved for data via ngOnInit
        fixture.detectChanges();
        tick();
        searchEl.nativeElement.value = 'qqq';
        searchEl.triggerEventHandler('keyup', null);
        fixture.detectChanges();
        tick();

        listEls = fixture.debugElement.queryAll(By.css('.badge'));
        expect(listEls.length).toEqual(0,
            'should not display flight numbers for an invalid search term (async)');

    }));

    it('should show "Details" button when a flight is selected (fakeAsync)', fakeAsync(() => {
        // TODO
    }));

    it('should nav to details page for selected flight when "Details" button clicked (fakeAsync)', fakeAsync(() => {
        // TODO
    }));
});
