// re-export for tester convenience
export { Flight } from '../entities/flight';
export { FlightService } from '../flight.service';

import { Flight } from '../entities/flight';

import { FLIGHTS } from './test-flightsJSON';

export class FakeFlightService {

    flights = FLIGHTS;

    getFlight(id: string): Promise<Flight> {
        let flight = this.flights.find(f => f.id === id);
        return Promise.resolve(flight);
    }

    getFlights(): Promise<Flight[]> {
        return Promise.resolve(this.flights);
    }
}
