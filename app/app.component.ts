import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { EnrollmentComponent } from './Enroll.component';
import { EnrollDetail } from './Enroll-detail.component';
import { EnrolledTable } from './enrolledTable.component';

@Component({
  selector: 'my-app',
  templateUrl: '/app/view/app.component.html',
  styleUrls: ['/app/styles/app.component.css'],
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
,
{
  path: 'detail/:id',
  name: 'SubjectDetail',
  component:EnrollDetail
},
{
  path: 'enrolled',
  name: 'EnrolledTable',
  component: EnrolledTable
}
])

export class AppComponent {
  title = 'Registration System';
}
