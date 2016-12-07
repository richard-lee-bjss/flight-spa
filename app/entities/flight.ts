import { FlightNumber } from './flight-number';
import { Prices } from './prices';

export class Flight {

    id: string;
    flightNumber: FlightNumber;
    departureAirport: string;
    departureAirportCode: string;
    arrivalAirport: string;
    arrivalAirportCode: string;
    depTerminalName: string;
    localDepartureTime: Date;
    localArrivalTime: Date;
    isDisrupted: boolean;
    seatsAvailable: number;
    prices: Prices;
}
