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
    // let id = +this.routeParams.get('id');
    // this.subjectService.getDetail(id.toString())
    //   .subscribe(detail => this.detail = detail);
  }
  id : string;
  detail = Detail;
  //detail : SubjectDetail;
  enrollList : SubjectDetail[];
  sub : SubjectDetail;

  ngOnInit(){
    this.getSubject();
    // let id = +this.routeParams.get('id');
    // this.subjectService.getDetail(id.toString())
    //   .subscribe(detail => this.detail = detail);
    //this.getEnrolled();
  }
  goBack() {
    window.history.back();
  }
  getSubject(){
    let id = +this.routeParams.get('id');
    this.subjectService.getDetail(id.toString())
      .subscribe(detail => this.detail = detail);
      let body = JSON.stringify(this.detail);
      //console.log( body );
  }
  addEnrolled(detail: SubjectDetail){
    console.log(detail);
    this.enrollService.addEnrolled(detail);

    // this.enrollService.addEnrolled(detail).subscribe(
    //     enrollList => enrollList = enrollList);
  }
  getJson(detail: SubjectDetail){
    //console.log(detail);
    let body = JSON.stringify({'StudentID' : 5610545714,'subject' : this.detail, 'Section' : 450});
    return body;
  }
  getEnrolled(){
    this.enrollService.getEnrolled()
                  .then(enrollList => this.enrollList = enrollList);
    // //this.enrollList = this.enrollService.getEnrolled()
    // this.enrollService.getEnrolled()
    //                 .subscribe(
    //                   enrollList => enrollList = enrollList);
  }
}
var Detail = new SubjectDetail(0,{th: '', en: ''},{seft: '', lab: '',total: '',lecture : ''},[],{th: '', en: ''});
