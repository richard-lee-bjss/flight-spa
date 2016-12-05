import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// Imports for loading & configuring the in-memory web api.
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { FlightComponent } from './flight.component';
import { FlightDetailComponent } from './flight-detail.component';
import { FlightService } from './flight.service';
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
    FlightComponent,
    FlightDetailComponent],
  providers: [FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
