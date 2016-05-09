import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { AppComponent } from './app.component';
import { Router } from '@angular/router-deprecated';
import { HTTP_PROVIDERS }    from '@angular/http';

@Component({
  selector: 'my-login',
  templateUrl: 'app/view/login.component.html',
  styleUrls: ['app/styles/login.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS]
})

@RouteConfig([
{
  path: 'appComponent/:studentid/...',
  name: 'AppComponent',
  component : AppComponent,
  // useAsDefault: true
}
])

export class LoginComponent {
  title = 'Registration System';
  StudentId: Number;
  constructor(
    private router: Router) {}
  gotoDetail(){
    //console.log(subject.id);
    let link = ['AppComponent', {studentid: '123'}];
    this.router.parent.navigate(link);
  }
}
