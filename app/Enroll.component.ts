import {Component} from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { Student }    from './student';

import {Http, Headers} from '@angular/http';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/core';

export class Subject{
  name: String[];
  id: Number;
}
@Component({
  selector: 'Enroll',
  templateUrl: './view/Enrollment.html',
  styleUrls: ['./styles/Enrollment.css'],
  // directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES ],
})

export class EnrollComponent{
  constructor(public http: Http) {
    Subject = SUBJECT;
    http.get('https://whsatku.github.io/skecourses/list.json')
      // Call map on the response observable to get the parsed people object
      .map(res => res.json())
      // Subscribe to the observable to get the parsed people object and attach it to the
      // component
      .subscribe(
        Subject => this.Subject = Subject,
  }
  // subject = Subject;
  search(InputId : number) {
    for (var i = 0; i < this.Subject.length; i++) {
      if (this.Subject[i].id == InputId) {
        // this.Selected = this.Subject[i].id;
        // var httpName = 'https://whsatku.github.io/skecourses/'+this.Selected+'json';
        // http.get(httpName)
        //   // Call map on the response observable to get the parsed people object
        //   .map(res => res.json())
        //   // Subscribe to the observable to get the parsed people object and attach it to the
        //   // component
        //   .subscribe(
        //     Detail => this.Detail = Detail,
        console.log("True");
        break;
      }
    }
  }

logError(err) {
  console.error('There was an error: ' + err);
}
}

var SUBJECT: Subject[];
