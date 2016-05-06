import {bootstrap}    from '@angular/platform-browser-dynamic';
import 'rxjs/Rx';
import {AppComponent} from './app.component';
import {EnrollComponent} from './Enroll.component';
import { HTTP_PROVIDERS } from '@angular/http';

bootstrap(AppComponent);
bootstrap(EnrollComponent,HTTP_PROVIDERS);
