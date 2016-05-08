import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http'

import {SubjectList} from './subjectList';
import {SubjectDetail} from './SubjectDetail';
import { Observable }     from 'rxjs/Observable';


@Injectable()
export class SubjectService {
  constructor (private http: Http) {}
  private heroesUrl = 'https://whsatku.github.io/skecourses/list.json';  // URL to web api
  getSubject (): Observable<SubjectList[]> {
    return this.http.get(this.heroesUrl)
          .map((responseData) => {
          return responseData.json();
          });
  }
  getDetail(id: String) : Observable<SubjectDetail>{
    return this.http.get('https://whsatku.github.io/skecourses/0'+id+'.json')
          .map((responseData) => {
          return responseData.json();
          });
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
