import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { HTTP_PROVIDERS }    from '@angular/http';
import { SubjectList } from './subjectList'
import{ SubjectDetail } from './subjectDetail'
import { SubjectService } from './subject.service';
import {EnrollService} from './enroll.service'

@Component({
  selector: 'detail',
  templateUrl: 'app/view/enroll-detail.component.html',
  styleUrls: ['app/styles/enroll-detail.component.css'],
  providers: [HTTP_PROVIDERS,SubjectService, SubjectList, EnrollService]
})
export class EnrollDetail{
  constructor(private enrollService: EnrollService, private subjectService: SubjectService, private routeParams: RouteParams){
    //this.enrollList = [new SubjectDetail();]
  }
  id : string;
  detail = Detail;
  enrollList : SubjectDetail[];
  sub : SubjectDetail;

  ngOnInit(){
    let id = +this.routeParams.get('id');
    this.subjectService.getDetail(id.toString())
      .subscribe(detail => this.detail = detail);
    this.getEnrolled();
  }
  goBack() {
    window.history.back();
  }
  addEnrolled(detail: SubjectDetail){
    this.enrollService.addEnrolled(detail);
  }
  getEnrolled(){
    this.enrollService.getEnrolled()
                  .then(enrollList => this.enrollList = enrollList);
    //this.enrollList = this.enrollService.getEnrolled()
  }
}
var Detail = new SubjectDetail();
