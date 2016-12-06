import { FlightNumber } from './flight-number';
import { Prices } from './prices';

export class Flight {

    constructor(
    public id: string,
    public flightNumber: FlightNumber,
    public departureAirport: string,
    public departureAirportCode: string,
    public arrivalAirport: string,
    public arrivalAirportCode: string,
    public depTerminalName: string,
    public localDepartureTime: Date,
    public localArrivalTime: Date,
    public isDisrupted: boolean,
    public seatsAvailable: number,
    public prices: Prices) {}
}
