System.register(['@angular/platform-browser-dynamic', 'rxjs/Rx', './app.component', './Enroll.component', '@angular/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_component_1, Enroll_component_1, http_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (_1) {},
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (Enroll_component_1_1) {
                Enroll_component_1 = Enroll_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent);
            platform_browser_dynamic_1.bootstrap(Enroll_component_1.EnrollComponent, http_1.HTTP_PROVIDERS);
        }
    }
});
//# sourceMappingURL=main.js.map