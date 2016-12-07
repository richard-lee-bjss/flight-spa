import { FLIGHTS } from './test-flightsJSON';
import { Flight } from '../entities/flight';

export class FakeHttp {

    url: string = '';

    get(url: string): Promise<Flight[]> {

        this.url = url;
        return Promise.resolve(FLIGHTS);
    }
};
