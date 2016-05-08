System.register(['@angular/core', '@angular/http', '@angular/router-deprecated', './subjectList', './subject.service', './search.pipe'], function(exports_1, context_1) {
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
    var core_1, http_1, router_deprecated_1, subjectList_1, subject_service_1, search_pipe_1;
    var EnrollmentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (subjectList_1_1) {
                subjectList_1 = subjectList_1_1;
            },
            function (subject_service_1_1) {
                subject_service_1 = subject_service_1_1;
            },
            function (search_pipe_1_1) {
                search_pipe_1 = search_pipe_1_1;
            }],
        execute: function() {
            EnrollmentComponent = (function () {
                function EnrollmentComponent(subjectService, subjectList, router) {
                    this.subjectService = subjectService;
                    this.subjectList = subjectList;
                    this.router = router;
                    this.subjects = [];
                    this.subject = { id: null, name: null };
                    this.searchInput = '';
                }
                EnrollmentComponent.prototype.ngOnInit = function () {
                    this.getSubject();
                };
                EnrollmentComponent.prototype.getSubject = function () {
                    var _this = this;
                    this.subjectService.getSubject()
                        .subscribe(function (subjects) { return _this.subjects = subjects; }, function (error) { return _this.errorMessage = error; });
                };
                EnrollmentComponent.prototype.gotoDetail = function (subject) {
                    //console.log(subject.id);
                    var link = ['SubjectDetail', { id: subject.id }];
                    this.router.navigate(link);
                };
                EnrollmentComponent = __decorate([
                    core_1.Component({
                        pipes: [search_pipe_1.SearchPipe],
                        templateUrl: "app/view/enroll.component.html",
                        styleUrls: ["app/styles/enroll.component.css"],
                        providers: [http_1.HTTP_PROVIDERS, subject_service_1.SubjectService, subjectList_1.SubjectList]
                    }), 
                    __metadata('design:paramtypes', [subject_service_1.SubjectService, subjectList_1.SubjectList, router_deprecated_1.Router])
                ], EnrollmentComponent);
                return EnrollmentComponent;
            }());
            exports_1("EnrollmentComponent", EnrollmentComponent);
        }
    }
});
//# sourceMappingURL=Enroll.component.js.map