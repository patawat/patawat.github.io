import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { HTTP_PROVIDERS }    from '@angular/http';
import { Router } from '@angular/router-deprecated';
import { SubjectList } from './subjectList';
import { SubjectService } from './subject.service';
import { SearchPipe } from './search.pipe';
import { EnrollDetail } from './Enroll-detail.component';

@Component({
    pipes:[SearchPipe],
    templateUrl: `app/view/enroll.component.html`,
    styleUrls: [`app/styles/enroll.component.css`],
    providers: [HTTP_PROVIDERS, SubjectService, SubjectList]
  })

export class EnrollmentComponent implements OnInit{
  subjects : SubjectList[] = [];
  subject : SubjectList = {id: null ,name: null}
  searchInput : String = '';
  errorMessage: String;

  constructor(
    private subjectService: SubjectService,
    private subjectList: SubjectList,
    private router: Router) {}

  ngOnInit() {
     this.getSubject();
  }
  getSubject(){
    this.subjectService.getSubject()
                  .subscribe(
                    subjects => this.subjects = subjects,
                    error =>  this.errorMessage = <any>error);
  }
  gotoDetail(subject: SubjectList){
    //console.log(subject.id);
    let link = ['SubjectDetail', {id: subject.id}];
    this.router.navigate(link);
  }
}
