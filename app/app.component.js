System.register(['@angular/core', '@angular/router-deprecated', './enroll.component', './Enroll-detail.component', './enrolledTable.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, enroll_component_1, Enroll_detail_component_1, enrolledTable_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (enroll_component_1_1) {
                enroll_component_1 = enroll_component_1_1;
            },
            function (Enroll_detail_component_1_1) {
                Enroll_detail_component_1 = Enroll_detail_component_1_1;
            },
            function (enrolledTable_component_1_1) {
                enrolledTable_component_1 = enrolledTable_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Registration System';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>{{title}}</h1>\n    <a [routerLink]=\"['Enroll']\">Enroll</a>\n    <a [routerLink]=\"['EnrolledTable']\">EnrolledTable</a>\n    <router-outlet></router-outlet>\n  ",
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                        providers: [router_deprecated_1.ROUTER_PROVIDERS]
                    }),
                    router_deprecated_1.RouteConfig([
                        {
                            path: '/Enroll',
                            name: 'Enroll',
                            component: enroll_component_1.EnrollmentComponent,
                            useAsDefault: true
                        },
                        {
                            path: 'detail/:id',
                            name: 'SubjectDetail',
                            component: Enroll_detail_component_1.EnrollDetail
                        },
                        {
                            path: 'enrolled',
                            name: 'EnrolledTable',
                            component: enrolledTable_component_1.EnrolledTable
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map