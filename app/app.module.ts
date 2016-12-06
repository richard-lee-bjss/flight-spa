import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FlightComponent } from './flight.component';
import { FlightDetailComponent } from './flight-detail.component';
import { FlightService } from './flight.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
],
  declarations: [
    AppComponent,
    FlightComponent,
    FlightDetailComponent],
  providers: [FlightService], //, FlightComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
