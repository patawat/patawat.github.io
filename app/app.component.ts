import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { EnrollComponent } from './Enroll.component';
import { Student }    from './student';

@Component({
  //selector: 'my-app',
  // templateUrl: './view/Enrollment.html',
  // styleUrls: ['./styles/Enrollment.css']
  templateUrl: './view/login.html',
  styleUrls: ['./styles/login.css']
})

export class AppComponent {
  model = new Student(55);
  submitted = false;
  onSubmit() { this.submitted = true; }

  // gotoEnroll(student: Student){
  //   let link = ['Enrollment',{ id: student.id}];
  //   this.router.navigate(link);
  // }

  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }
}
