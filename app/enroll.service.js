System.register(['@angular/core', '@angular/http', './mock-enroll'], function(exports_1, context_1) {
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
    var core_1, http_1, mock_enroll_1;
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
            }],
        execute: function() {
            EnrollService = (function () {
                function EnrollService(http) {
                    this.http = http;
                    this.heroesUrl = 'https://whsatku.github.io/skecourses/list.json'; // URL to web api
                    this.enrolled = [];
                }
                EnrollService.prototype.getEnrolled = function () {
                    return Promise.resolve(mock_enroll_1.SUBJECT);
                    //return this.enrolled;
                };
                EnrollService.prototype.addEnrolled = function (subject) {
                    //console.log(subject.name.th);
                    mock_enroll_1.SUBJECT.push(subject);
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