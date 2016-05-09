import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {SubjectDetail} from './SubjectDetail';
import {SUBJECT} from './mock-enroll';

@Injectable()

export class EnrollService {
  constructor (private http: Http) {
    this.enrolled = [];
  }
  private heroesUrl = 'https://whsatku.github.io/skecourses/list.json';  // URL to web api
  private enrolled : SubjectDetail[];
  getEnrolled(){
    return Promise.resolve(SUBJECT);
    //return this.enrolled;
  }
  addEnrolled(subject : SubjectDetail){

    var check = true;
    if (SUBJECT != null) {
      //var x =Promise.resolve(SUBJECT);
      for(var test of SUBJECT){
        if (test.id === subject.id) {
          check = false;
        }
      }
    }

    // if (!(SUBJECT.indexOf(subject) != -1)) {
    if (check) {
      SUBJECT.push(subject);
    }

    //}
    //console.log(subject.name.th);


  }
  // private extractData(res: Response) {
  //   if (res.status < 200 || res.status >= 300) {
  //     throw new Error('Bad response status: ' + res.status);
  //   }
  //   let body = res.json();
  //   return body.data || { };
  // }
  // private handleError (error: any) {
  //   // In a real world app, we might send the error to remote logging infrastructure
  //   let errMsg = error.message || 'Server error';
  //   console.error(errMsg); // log to console instead
  //   return Observable.throw(errMsg);
  // }
}
