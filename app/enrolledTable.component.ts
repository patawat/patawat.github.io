import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HTTP_PROVIDERS }    from '@angular/http';
import { SubjectList } from './subjectList'
import{ SubjectDetail } from './subjectDetail'
import { SubjectService } from './subject.service';
import {EnrollService} from './enroll.service'


@Component({
  templateUrl: `app/view/enrolledTable.component.html`,
  styleUrls: ['app/styles/enrolledTable.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, EnrollService, HTTP_PROVIDERS]
})
export class EnrolledTable implements OnInit{
  enrollList : SubjectDetail[] = [];
  sub : SubjectDetail;
  //result : string ;
  myJsonString: string;
  constructor(private enrollService: EnrollService){
     //this.enrollList = [new SubjectList()];
    // this.sub = new SubjectList();
    //this.result = '';
  }
  ngOnInit(){
    this.getEnrolled();
     //let myJsonString = JSON.stringify(this.enrollList);
     //this.result = JSON.stringify(myJsonString);

  }
  drop(sub : SubjectDetail){
    this.enrollService.drop(sub);
  }
  getEnrolled(){
    // this.enrollService.getEnrolled()
    //                 .subscribe(
    //                   enrollList => enrollList = enrollList);
    this.enrollService.getEnrolled()
                  .then(enrollList => this.enrollList = enrollList);


    console.log(JSON.stringify(this.enrollList));

  }
  goBack() {
    window.history.back();
  }
}
