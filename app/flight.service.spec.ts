/* tslint:disable:no-unused-variable */
import { async, fakeAsync, inject, TestBed, getTestBed } from '@angular/core/testing';
import { Headers, BaseRequestOptions, Response, HttpModule, Http, XHRBackend, RequestMethod } from '@angular/http';
import { ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { FlightService } from './flight.service';

import { Flight } from './models/flight';
import { FLIGHTS } from './test/test-flightsJSON';

//////////// TESTS ////////////
describe('FlightService', function () {

    let svc: FlightService;
    let mockBackend: MockBackend;

    beforeEach(() => {

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
            imports: [HttpModule]
        });

        svc = getTestBed().get(FlightService);
        mockBackend = getTestBed().get(MockBackend);

        mockBackend.connections.subscribe((connection: MockConnection) => {
            // set default response data
            let options = new ResponseOptions({ body: FLIGHTS });
            connection.mockRespond(new Response(options));
        });

    });

    it('should create component', () => expect(svc).toBeDefined());

    it('should use correct url (async)', async(() => {

        mockBackend.connections.subscribe((connection: MockConnection) => {
            // check backend was called as expected
            expect(connection.request.method).toEqual(RequestMethod.Get);
            expect(connection.request.url).toEqual('http://ejtestbed.herokuapp.com/flights');
        });

        svc.getFlights();

    }));

    it('should return flights', async(() => {

        svc.getFlights().then(f => {
            expect(f.length).toBeDefined();
            expect(f.length).toEqual(8);
            expect(f[0].id).toEqual('EZ001Test');
        });
    }));
});
