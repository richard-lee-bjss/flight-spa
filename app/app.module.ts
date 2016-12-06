import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// Imports for loading & configuring the in-memory web api.
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { FlightsComponent } from './flights.component';
import { FlightsService } from './flights.service';
// import { FlightSearchComponent }  from './flight-search.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
],
  declarations: [
    AppComponent,
    FlightsComponent],
  providers: [FlightsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
