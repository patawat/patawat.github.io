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
  private subjectUrl = 'app/mock-enroll.json';
  private enrolled : SubjectDetail[];
  drop(subject : SubjectDetail){
    var x = SUBJECT.indexOf(subject);
    SUBJECT.splice(x,1);
  }
  getEnrolled()
  //: Observable<SubjectDetail[]>
  {
    //return this.http.get(this.heroesUrl)
    // // .map((responseData) => {
    // // return responseData.json();
    // // });
    //       .map(this.extractData)
    //       .catch(this.handleError);
    return Promise.resolve(SUBJECT);
  }
  addEnrolled(subject : SubjectDetail)
  //:Observable<SubjectDetail[]>
  {

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
    //console.log(subject.id);
     let body = JSON.stringify({subject});
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });
    //console.log(body);
  //  return this.http.post(this.heroesUrl, body, options)
  //                  .map(this.extractData)
  //                  .catch(this.handleError);
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
