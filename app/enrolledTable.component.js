System.register(['@angular/core', '@angular/router-deprecated', '@angular/http', './enroll.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, http_1, enroll_service_1;
    var EnrolledTable;
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
            function (enroll_service_1_1) {
                enroll_service_1 = enroll_service_1_1;
            }],
        execute: function() {
            EnrolledTable = (function () {
                function EnrolledTable(enrollService) {
                    this.enrollService = enrollService;
                }
                EnrolledTable.prototype.ngOnInit = function () {
                    this.getEnrolled();
                };
                EnrolledTable.prototype.getEnrolled = function () {
                    var _this = this;
                    this.enrollService.getEnrolled()
                        .then(function (enrollList) { return _this.enrollList = enrollList; });
                };
                EnrolledTable = __decorate([
                    core_1.Component({
                        templateUrl: "app/view/enrolledTable.component.html",
                        styleUrls: ['app/styles/enrolledTable.component.css'],
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                        providers: [router_deprecated_1.ROUTER_PROVIDERS, enroll_service_1.EnrollService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [enroll_service_1.EnrollService])
                ], EnrolledTable);
                return EnrolledTable;
            }());
            exports_1("EnrolledTable", EnrolledTable);
        }
    }
});
//# sourceMappingURL=enrolledTable.component.js.map