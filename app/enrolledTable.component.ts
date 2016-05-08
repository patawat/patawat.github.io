import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HTTP_PROVIDERS }    from '@angular/http';
import { SubjectList } from './subjectList'
import{ SubjectDetail } from './subjectDetail'
import { SubjectService } from './subject.service';
import {EnrollService} from './enroll.service'


@Component({
  template: `
    <div *ngFor="let sub of enrollList">{{sub.name.th}}</div>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, EnrollService, HTTP_PROVIDERS]
})
export class EnrolledTable{
  enrollList : SubjectDetail[];
  sub : SubjectDetail;
  constructor(private enrollService: EnrollService){
  }
  ngOnInit(){
    this.getEnrolled();
  }
  getEnrolled(){
    this.enrollService.getEnrolled()
                  .then(enrollList => this.enrollList = enrollList);
  }
}
