# Flights Info 
Angular QuickStart Source

This repository holds the TypeScript source code of Rich Lee's EasyJet coding test.
It's based on the Quickstart as recommended on [angular.io quickstart](https://angular.io/docs/ts/latest/quickstart.html).

## Prerequisites

Node.js and npm 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Install</a> if it's not already installed on your machine.
 
Verify that you are running at least node `v4.x.x` and npm `3.x.x`
by running `node -v` and `npm -v` in a terminal/console window.

## Git repo
This is on my BJSS repo at <a href="http://github.com/richard-lee-bjss/flight-spa" target="_blank" title="Flight-Spa">
GitHub</a>

Clone it with 
```bash
git clone https://github.com/richard-lee-bjss/flight-spa.git
```

## Install npm packages and run/test the app

Install the npm packages described in the `package.json` and verify that it works:

```bash
npm install
npm start
```

* `npm start` command first compiles the application, then simultaneously re-compiles and runs the `lite-server`. Both the compiler and the server watch for file changes.
Shut it down manually with `Ctrl-C`.
* `npm test` - compiles, runs and watches the karma unit tests. Test-runner output appears in the terminal window.
* `npm run e2e` - run protractor e2e tests, written in JavaScript (*e2e-spec.js)

## Testing

This repo includes karma/jasmine unit tests and protractor end-to-end testing support.

### End-to-end (E2E) Tests

I've done nothing with e2e tests other than update the example so it pases.
Run them with `npm run e2e`.

That command first compiles, then simultaneously starts the Http-Server at `localhost:8080`
and launches protractor.  

# A brief discussion of what I've done here

## App requirements

**Code test for Developer Role**

flights api: http://ejtestbed.herokuapp.com/flights

Develop a simple spa application that consumes the above flights api using the technologies i.e.  Html, Css (.less  .sass etc.) and a Javascript framework of your choice.

The app should do the following :
* display flights in a search results page 
* Allow a user to click on the link to display a details page on selected flight
* client side filtering

## Implementation
Firstly Angular2 is new to me, so it's been a case of learning enough to implement the app and 
some representative unit testing.

* FlightComponent - the main page, with a searhc box. Entering terms (flight id) into the box generates
a filtered list of ids below. Select one to show a 'Details' button. Click to nav to details.
* FlightDetailsComponent - the details page. A back button returns to the main page. Routing from 
main<->details uses Angular routing.
* FlightService - encapsulates the api call

Client side filtering is done for the FlightComponent using a member variable populated on init by 
a single back end service call to the api. the api data seems to only really differ in terms of the 
flight number, so for a basic implementation I'filtering only on the id. Additional filtering can 
easily be added with furhter checks in the FlightComponent search() method.

Nav to the details page is accompanied by a further call to the api to get the selected flight. 
Ideally I wouldn't do this - I'd persist the flights to a local FlightStore component and use that 
instead of making another call.

## Testing
Due to time constraints I've tried to create test to demonstrate the key unit testing features
which might be used in an app, rather than to attempt full coverage.

* FlightComponent
    * uses a fake service to return dummy test data
    * sets values into the search box UI element, trigger an event, and verifies that the results list is displayed by 
    querying the relevant CSS style tag on the page; demonstrating UT by manipulating the template/view.
    * I've implemented the FlightComponent code with appropriate private state and functions, 
    so that UI-based testing is appropriate. I'm assuming that maximum encapsulation is required in 
    production code, so this etst style will be common. 

* FlightDetailsComponent
    * THis component is routed from the main FlightComponent view, and calls the service to get the requried flight.
    * So I've faked/stubbed the dependencies. 
        * For the service dependency the fake returns dummy data.
        * For the router dependency I've set the stub to return the id of one of the dummy flights.
        * The Location dependency is dumb, but I use a Spy to check it was called when the goBack() function is called.

* FlightService
    * uses Angular2's MockBackend to fake out the service's Http call. It would be simpler to use a 
    basic Http stub, but MockBackend seems to be a preferred approach.
    * tests that the correct URL is used, and that flights are corectly returned via a promise.
