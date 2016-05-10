System.register(['@angular/core', '@angular/router-deprecated', '@angular/http', './subjectList', './subjectDetail', './subject.service', './enroll.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, http_1, subjectList_1, subjectDetail_1, subject_service_1, enroll_service_1;
    var EnrollDetail, Detail;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (subjectList_1_1) {
                subjectList_1 = subjectList_1_1;
            },
            function (subjectDetail_1_1) {
                subjectDetail_1 = subjectDetail_1_1;
            },
            function (subject_service_1_1) {
                subject_service_1 = subject_service_1_1;
            },
            function (enroll_service_1_1) {
                enroll_service_1 = enroll_service_1_1;
            }],
        execute: function() {
            EnrollDetail = (function () {
                function EnrollDetail(enrollService, subjectService, routeParams) {
                    this.enrollService = enrollService;
                    this.subjectService = subjectService;
                    this.routeParams = routeParams;
                    this.detail = Detail;
                    //this.enrollList = [new SubjectDetail();]
                    // let id = +this.routeParams.get('id');
                    // this.subjectService.getDetail(id.toString())
                    //   .subscribe(detail => this.detail = detail);
                }
                EnrollDetail.prototype.ngOnInit = function () {
                    this.getSubject();
                    // let id = +this.routeParams.get('id');
                    // this.subjectService.getDetail(id.toString())
                    //   .subscribe(detail => this.detail = detail);
                    //this.getEnrolled();
                };
                EnrollDetail.prototype.goBack = function () {
                    window.history.back();
                };
                EnrollDetail.prototype.getSubject = function () {
                    var _this = this;
                    var id = +this.routeParams.get('id');
                    this.subjectService.getDetail(id.toString())
                        .subscribe(function (detail) { return _this.detail = detail; });
                    var body = JSON.stringify(this.detail);
                    //console.log( body );
                };
                EnrollDetail.prototype.addEnrolled = function (detail) {
                    console.log(detail);
                    this.enrollService.addEnrolled(detail);
                    // this.enrollService.addEnrolled(detail).subscribe(
                    //     enrollList => enrollList = enrollList);
                };
                EnrollDetail.prototype.getJson = function (detail) {
                    //console.log(detail);
                    var body = JSON.stringify({ 'StudentID': 5610545714, 'subject': this.detail, 'Section': 450 });
                    return body;
                };
                EnrollDetail.prototype.getEnrolled = function () {
                    var _this = this;
                    this.enrollService.getEnrolled()
                        .then(function (enrollList) { return _this.enrollList = enrollList; });
                    // //this.enrollList = this.enrollService.getEnrolled()
                    // this.enrollService.getEnrolled()
                    //                 .subscribe(
                    //                   enrollList => enrollList = enrollList);
                };
                EnrollDetail = __decorate([
                    core_1.Component({
                        selector: 'detail',
                        templateUrl: 'app/view/enroll-detail.component.html',
                        styleUrls: ['app/styles/enroll-detail.component.css'],
                        providers: [http_1.HTTP_PROVIDERS, subject_service_1.SubjectService, subjectList_1.SubjectList, enroll_service_1.EnrollService]
                    }), 
                    __metadata('design:paramtypes', [enroll_service_1.EnrollService, subject_service_1.SubjectService, router_deprecated_1.RouteParams])
                ], EnrollDetail);
                return EnrollDetail;
            }());
            exports_1("EnrollDetail", EnrollDetail);
            Detail = new subjectDetail_1.SubjectDetail(0, { th: '', en: '' }, { seft: '', lab: '', total: '', lecture: '' }, [], { th: '', en: '' });
        }
    }
});
//# sourceMappingURL=Enroll-detail.component.js.map