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

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            declarations: [FlightComponent],
            providers: [
                { provide: FlightService, useClass: FakeFlightService },
                { provide: Router, useClass: RouterStub }]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FlightComponent);
        comp = fixture.componentInstance;

        fakeService = TestBed.get(FlightService);
        searchEl = fixture.debugElement.query(By.css('#search-box'));
    });

    it('should create component', () => expect(comp).toBeDefined());

    it('should load flights on initialisation', () => {

        const spy = spyOn(fakeService, 'getFlights').and.callThrough();

        // expect fake service to have been called once
        // comp.ngOnInit(); is automatically called on instantiation
        fixture.detectChanges();
        expect(spy.calls.count()).toBe(1, 'getFlights called');
    });

    it('should display all flight numbers for an empty search term (fakeAsync)', fakeAsync(() => {

        // this test case corresponds to deleting/backspace serch terms from the search box

        // let service promises be resolved for data via ngOnInit
        fixture.detectChanges();
        tick();
        searchEl.nativeElement.value = '';
        searchEl.triggerEventHandler('keyup', null);
        fixture.detectChanges();
        tick();

        listEls = fixture.debugElement.queryAll(By.css('.list-group-item'));
        expect(listEls.length).toEqual(8,
            'should  display all flight numbers for an empty search term (fakeAsync)');

    }));

    it('should display flight numbers for id search (fakeAsync)', fakeAsync(() => {

        fixture.detectChanges();
        tick();
        searchEl.nativeElement.value = 'e';
        searchEl.triggerEventHandler('keyup', null);
        fixture.detectChanges();
        tick();

        listEls = fixture.debugElement.queryAll(By.css('.list-group-item'));
        expect(listEls.length).toEqual(8,
            'should display flight numbers for id search (fakeAsync)');
        expect(listEls[0].nativeElement.innerText)
            .toEqual('EZ001Test: London Luton (LTN) to Berlin Schoenefeld (SXF) on 6/30/2016, 7:40 AM',
            'element [0] should be "EZ001Test: London Luton (LTN) to Berlin Schoenefeld (SXF) on 6/30/2016, 7:40 AMF"');
        expect(listEls[7].nativeElement.innerText)
            .toEqual('EZ008: London Luton (LTN) to Berlin Schoenefeld (SXF) on 7/1/2016, 8:55 PM',
            'element [7] should be "EZ008: London Luton (LTN) to Berlin Schoenefeld (SXF) on 7/1/2016, 8:55 PM"');
    }));

    it('should display flight numbers for flight number search (fakeAsync)', fakeAsync(() => {

        fixture.detectChanges();
        tick();
        searchEl.nativeElement.value = '5409';
        searchEl.triggerEventHandler('keyup', null);
        fixture.detectChanges();
        tick();

        listEls = fixture.debugElement.queryAll(By.css('.list-group-item'));
        expect(listEls.length).toEqual(2,
            'should display flight numbers for flight number search (fakeAsync)');
        expect(listEls[0].nativeElement.innerText)
            .toEqual('EZ002: London Luton (LTN) to Berlin Schoenefeld (SXF) on 6/30/2016, 9:40 AM',
            'element [0] should be "EZ002: London Luton (LTN) to Berlin Schoenefeld (SXF) on 6/30/2016, 9:40 AM"');
    }));

    it('should display flight numbers for departure airport search (fakeAsync)', fakeAsync(() => {

        fixture.detectChanges();
        tick();
        searchEl.nativeElement.value = 'Bristol';
        searchEl.triggerEventHandler('keyup', null);
        fixture.detectChanges();
        tick();

        listEls = fixture.debugElement.queryAll(By.css('.list-group-item'));
        expect(listEls.length).toEqual(1,
            'should display flight numbers for departure airport search (fakeAsync)');
        expect(listEls[0].nativeElement.innerText)
            .toEqual('EZ003: Bristol (BRS) to Birmingham (BHI) on 6/30/2016, 6:55 PM',
            'element [0] should be "EZ003: Bristol (BRS) to Birmingham (BHI) on 6/30/2016, 6:55 PM"');
    }));

    it('should display flight numbers for arrival airport search (fakeAsync)', fakeAsync(() => {

        fixture.detectChanges();
        tick();
        searchEl.nativeElement.value = 'Birmingham';
        searchEl.triggerEventHandler('keyup', null);
        fixture.detectChanges();
        tick();

        listEls = fixture.debugElement.queryAll(By.css('.list-group-item'));
        expect(listEls.length).toEqual(1,
            'should display flight numbers for arrival airport search (fakeAsync)');
        expect(listEls[0].nativeElement.innerText)
            .toEqual('EZ003: Bristol (BRS) to Birmingham (BHI) on 6/30/2016, 6:55 PM',
            'element [0] should be "EZ003: Bristol (BRS) to Birmingham (BHI) on 6/30/2016, 6:55 PMI"');
    }));

    it('should not display flight numbers for an invalid search term (fakeAsync)', fakeAsync(() => {

        fixture.detectChanges();
        tick();
        searchEl.nativeElement.value = 'qqq';
        searchEl.triggerEventHandler('keyup', null);
        fixture.detectChanges();
        tick();

        listEls = fixture.debugElement.queryAll(By.css('.list-group-item'));
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
