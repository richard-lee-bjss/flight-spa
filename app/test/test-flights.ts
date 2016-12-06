import { Flight } from '../entities/flight';
import { FlightNumber } from '../entities/flight-number';
import { Prices } from '../entities/prices';
import { Price } from '../entities/price';

export var FLIGHTS: Flight[] = [
    new Flight(
        'EZ001',
        new FlightNumber('EZY', 5407),
        'London Luton (LTN)',
        'LPT',
        'Berlin Schoenefeld (SXF)',
        'SXF',
        'South Terminal',
        new Date('2016-06-30T06:40:00'),
        new Date('2016-06-30T09:35:00'),
        false,
        9,
        new Prices(
            new Price(27.99, 40.99, 41.81),
            new Price(27.99, 40.99, 41.81),
            null
        )
    ),
    new Flight('EZ002',
        new FlightNumber('EZY', 5409),
        'London Luton (LTN)',
        'LGW',
        'Berlin Schoenefeld (SXF)',
        'SXF',
        'South Terminal',
        new Date('2016-06-30T08:40:00'),
        new Date('2016-06-30T11:45:00'),
        false,
        9,
        new Prices(
            new Price(46.99, 59.99, 61.19),
            new Price(46.99, 59.99, 61.19),
            null)
    ),
    new Flight(
        'EZ003',
        new FlightNumber('EZY', 5415),
        'London Luton (LTN)',
        'LGW',
        'Berlin Schoenefeld (SXF)',
        'SXF',
        'South Terminal',
        new Date('2016-06-30T17:55:00'),
        new Date('2016-06-30T20:50:00'),
        false,
        9,
        new Prices(
            new Price(38.99, 51.99, 53.03),
            new Price(38.99, 51.99, 53.03),
            null)
    ),
    new Flight(
        'EZ004',
        new FlightNumber('EZY', 5417),
        'London Luton (LTN)',
        'LGW',
        'Berlin Schoenefeld (SXF)',
        'SXF',
        'South Terminal',
        new Date('2016-06-30T19:55:00'),
        new Date('2016-06-30T23:00:00'),
        false,
        9,
        new Prices(
            new Price(36.99, 49.99, 50.99),
            new Price(36.99, 49.99, 50.99),
            null)
    ),
    new Flight(
        'EZ005',
        new FlightNumber('EZY', 5407),
        'London Luton (LTN)',
        'LGW',
        'Berlin Schoenefeld (SXF)',
        'SXF',
        'South Terminal',
        new Date('2016-07-01T06:40:00'),
        new Date('2016-07-01T09:35:00'),
        false,
        9,
        new Prices(
            new Price(53.99, 66.99, 68.33),
            new Price(53.99, 66.99, 68.33),
            null)
    ),
    new Flight(
        'EZ006',
        new FlightNumber('EZY', 5409),
        'London Luton (LTN)',
        'LGW',
        'Berlin Schoenefeld (SXF)',
        'SXF',
        'South Terminal',
        new Date('2016-07-01T08:40:00'),
        new Date('2016-07-01T11:45:00'),
        false,
        9,
        new Prices(
            new Price(74.99, 87.99, 89.75),
            new Price(74.99, 87.99, 89.75),
            null)
    ),
    new Flight(
        'EZ007',
        new FlightNumber('EZY', 5415),
        'London Luton (LTN)',
        'LGW',
        'Berlin Schoenefeld (SXF)',
        'SXF',
        'South Terminal',
        new Date('2016-07-01T17:55:00'),
        new Date('2016-07-01T20:50:00'),
        false,
        9,
        new Prices(
            new Price(64.99, 77.99, 79.55),
            new Price(64.99, 77.99, 79.55),
            null)
    ),
    new Flight(
        'EZ008',
        new FlightNumber('EZY', 5417),
        'London Luton (LTN)',
        'LGW',
        'Berlin Schoenefeld (SXF)',
        'SXF',
        'South Terminal',
        new Date('2016-07-01T19:55:00'),
        new Date('2016-07-01T23:00:00'),
        false,
        9,
        new Prices(
            new Price(43.99, 56.99, 58.13),
            new Price(43.99, 56.99, 58.13),
            null)
    )
];
