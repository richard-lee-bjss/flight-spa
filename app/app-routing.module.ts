import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FlightsComponent }  from './flights.component';

const routes: Routes = [
    { path: '', redirectTo: '/flights', pathMatch: 'full' },
    { path: 'flights', component: FlightsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
