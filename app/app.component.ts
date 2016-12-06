import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/flights">Flights</a>
        </nav>
        <router-outlet></router-outlet>
`,
})

export class AppComponent { name = 'FlightInfo'; }
