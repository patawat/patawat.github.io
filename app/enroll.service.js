System.register(['@angular/core', '@angular/http', './mock-enroll', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, mock_enroll_1, Observable_1;
    var EnrollService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (mock_enroll_1_1) {
                mock_enroll_1 = mock_enroll_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            EnrollService = (function () {
                function EnrollService(http) {
                    this.http = http;
                    this.heroesUrl = 'http://52.37.98.127:3000/v1/5610545714?pin=5714'; // URL to web api
                    this.subjectUrl = 'app/mock-enroll.json';
                    this.enrolled = [];
                }
                EnrollService.prototype.drop = function (subject) {
                    var x = mock_enroll_1.SUBJECT.indexOf(subject);
                    mock_enroll_1.SUBJECT.splice(x, 1);
                };
                EnrollService.prototype.getEnrolled = function () {
                    //return this.http.get(this.heroesUrl)
                    // // .map((responseData) => {
                    // // return responseData.json();
                    // // });
                    //       .map(this.extractData)
                    //       .catch(this.handleError);
                    return Promise.resolve(mock_enroll_1.SUBJECT);
                };
                EnrollService.prototype.addEnrolled = function (subject) {
                    var check = true;
                    if (mock_enroll_1.SUBJECT != null) {
                        for (var _i = 0, SUBJECT_1 = mock_enroll_1.SUBJECT; _i < SUBJECT_1.length; _i++) {
                            var test = SUBJECT_1[_i];
                            if (test.id === subject.id) {
                                check = false;
                            }
                        }
                    }
                    if (check) {
                        mock_enroll_1.SUBJECT.push(subject);
                    }
                    else {
                        alert('This subject was enrolled');
                    }
                    //console.log(subject.id);
                    var body = JSON.stringify({ subject: subject });
                    //   let headers = new Headers({ 'Content-Type': 'application/json' });
                    //   let options = new RequestOptions({ headers: headers });
                    //console.log(body);
                    //  return this.http.post(this.heroesUrl, body, options)
                    //                  .map(this.extractData)
                    //                  .catch(this.handleError);
                };
                EnrollService.prototype.extractData = function (res) {
                    if (res.status < 200 || res.status >= 300) {
                        throw new Error('Bad response status: ' + res.status);
                    }
                    var body = res.json();
                    return body.data || {};
                };
                EnrollService.prototype.handleError = function (error) {
                    // In a real world app, we might send the error to remote logging infrastructure
                    var errMsg = error.message || 'Server error';
                    console.error(errMsg); // log to console instead
                    return Observable_1.Observable.throw(errMsg);
                };
                EnrollService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], EnrollService);
                return EnrollService;
            }());
            exports_1("EnrollService", EnrollService);
        }
    }
});
//# sourceMappingURL=enroll.service.js.map