/* tslint:disable:no-unused-variable */
import { async, inject, TestBed, getTestBed } from '@angular/core/testing';
import { Headers, BaseRequestOptions, Response, HttpModule, Http, XHRBackend, RequestMethod } from '@angular/http';
import { ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { FlightService } from './flight.service';

import { Flight } from './entities/flight';
import { FLIGHTS } from './test/test-flightsJSON';

//////////// TESTS ////////////
describe('FlightService', function () {

    let mockBackend: MockBackend;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            providers: [
                FlightService,
                MockBackend,
                BaseRequestOptions,
                {
                    provide: Http,
                    deps: [MockBackend, BaseRequestOptions],
                    useFactory:
                    (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    }
                }
            ],
            imports: [
                HttpModule
            ]
        });
        mockBackend = getTestBed().get(MockBackend);
    }));

    beforeEach(() => {

        // inject([FlightService], (flightService: FlightService) => {
        //     svc = flightService;
        // });
    });

    it('should create component', async(() => {
        let svc: FlightService;

        svc = getTestBed().get(FlightService);
        expect(svc).toBeDefined();
    }));

    it('should use correct url and return a promise on flights', () => {
        let svc: FlightService;

        getTestBed().compileComponents().then(() => {
            mockBackend.connections.subscribe(
                (connection: MockConnection) => {
                    connection.mockRespond(new Response(
                        new ResponseOptions({
                            body: FLIGHTS
                        }
                        )));
                });

            svc = getTestBed().get(FlightService);
            expect(svc).toBeDefined();

            let flights: Flight;
            svc.getFlights().then(f => {
                expect(f.length).toBeDefined();
                expect(f.length).toEqual(8);
                expect(f[0].id).toEqual('EZ001Test');
                // TODO why am I getting en embedded array? Data problem in test
            });
        });

    });
});