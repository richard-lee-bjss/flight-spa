import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FlightDetailComponent }  from './flight-detail.component';
import { FlightComponent }  from './flight.component';

const routes: Routes = [
    { path: '', redirectTo: '/flight', pathMatch: 'full' },
    { path: 'flight', component: FlightComponent },
    { path: 'detail/:id', component: FlightDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
