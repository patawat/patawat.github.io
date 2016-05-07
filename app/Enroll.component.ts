import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { HTTP_PROVIDERS }    from '@angular/http';
import { Router } from '@angular/router-deprecated';
import { SubjectList } from './subjectList';
import { SubjectService } from './subject.service';
import { SearchPipe } from './search.pipe';

@Component({

  pipes:[SearchPipe],
  template: `
  <input [(ngModel)] = "searchInput" placeholder="name" />
  <ul>
    <li *ngFor="let subjectx of subjects | search : searchInput">
      {{subjectx.id}}{{subjectx.name.en}}
    </li>
  </ul>
    `,
    providers: [HTTP_PROVIDERS, SubjectService, SubjectList]
  })

export class EnrollmentComponent implements OnInit{
  constructor(
    private subjectService: SubjectService,
    private subjectList: SubjectList) {}

  subjects : SubjectList[] = [];
  subject : SubjectList = {id: null ,name: null}
  searchInput : String = '';
  errorMessage: String;
  ngOnInit() {
     this.getSubject();
  }
  getSubject(){
    this.subjectService.getSubject()
                  .subscribe(
                    subjects => this.subjects = subjects,
                    error =>  this.errorMessage = <any>error);
  }
}
