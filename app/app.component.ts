import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/flight">Flights</a>
        </nav>
        <router-outlet></router-outlet>
`,
})

export class AppComponent { name = 'FlightInfo'; }



// TODO show active link when there are more than one
// <a routerLink="/flights" routerLinkActive="active">Flights</a>
