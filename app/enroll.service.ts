import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {SubjectDetail} from './subjectDetail';
import {SUBJECT} from './mock-enroll';
import { Observable }     from 'rxjs/Observable';

@Injectable()

export class EnrollService {
  constructor (private http: Http) {
    this.enrolled = [];
  }
  private heroesUrl = 'http://52.37.98.127:3000/v1/5610545714?pin=5714';  // URL to web api
  private enrolled : SubjectDetail[];
  getEnrolled(){
    // return this.http.get(this.heroesUrl)
    // .map(this.extractData)
    //                 .catch(this.handleError);
    return Promise.resolve(SUBJECT);
  }
  addEnrolled(subject : SubjectDetail){

    var check = true;
    if (SUBJECT != null) {
      for(var test of SUBJECT){
        if (test.id === subject.id) {
          check = false;
        }
      }
    }
    if (check) {
      SUBJECT.push(subject);
    }
    else{
      alert('This subject was enrolled');
    }
  }
  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return body.data || { };
  }
  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
