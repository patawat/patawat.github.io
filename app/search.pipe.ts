import {Pipe, PipeTransform} from '@angular/core';
import { SubjectList } from './subjectList';

@Pipe({
  name:"search"
})
export class SearchPipe{
  constructor(
    private subjectList: SubjectList) {
  }
  transform(value: SubjectList[],x: string){
    //return value;
    return value.filter(subject => subject.id.startsWith(x));
  }

}
