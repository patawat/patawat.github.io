import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { EnrollmentComponent } from './enroll.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>

    <a [routerLink]="['Enroll']">Enroll</a>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
  {
  path: '/Enroll',
  name: 'Enroll',
  component: EnrollmentComponent,
  useAsDefault: true
}
])

export class AppComponent {
  title = 'Tour of Heroes';
}
