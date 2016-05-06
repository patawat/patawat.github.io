System.register(['@angular/core', '@angular/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var Subject, EnrollComponent, SUBJECT;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            Subject = (function () {
                function Subject() {
                }
                return Subject;
            }());
            exports_1("Subject", Subject);
            EnrollComponent = (function () {
                function EnrollComponent(http) {
                    var _this = this;
                    this.http = http;
                    exports_1("Subject", Subject = SUBJECT);
                    http.get('https://whsatku.github.io/skecourses/list.json')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (Subject) { return _this.Subject = Subject; });
                }
                // subject = Subject;
                EnrollComponent.prototype.search = function (InputId) {
                    for (var i = 0; i < this.Subject.length; i++) {
                        if (this.Subject[i].id == InputId) {
                            // this.Selected = this.Subject[i].id;
                            // var httpName = 'https://whsatku.github.io/skecourses/'+this.Selected+'json';
                            // http.get(httpName)
                            //   // Call map on the response observable to get the parsed people object
                            //   .map(res => res.json())
                            //   // Subscribe to the observable to get the parsed people object and attach it to the
                            //   // component
                            //   .subscribe(
                            //     Detail => this.Detail = Detail,
                            console.log("True");
                            break;
                        }
                    }
                };
                EnrollComponent.prototype.logError = function (err) {
                    console.error('There was an error: ' + err);
                };
                EnrollComponent = __decorate([
                    core_1.Component({
                        selector: 'Enroll',
                        templateUrl: './view/Enrollment.html',
                        styleUrls: ['./styles/Enrollment.css'],
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], EnrollComponent);
                return EnrollComponent;
            }());
            exports_1("EnrollComponent", EnrollComponent);
        }
    }
});
//# sourceMappingURL=Enroll.component.js.map