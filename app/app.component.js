System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var Hero, AppComponent, HEROES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Hero = (function () {
                function Hero() {
                }
                return Hero;
            }());
            exports_1("Hero", Hero);
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Tour of Heroes';
                    this.heroes = HEROES;
                }
                AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n  <body>\n  <nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <a class=\"navbar-brand\"  href=\"#\">\n            Kasetsart University\n          </a>\n        </div>\n        <div class=\" navbar-right\">\n          <a class=\"navbar-brand\"  href=\"#\">\n              Registration System\n          </a>\n        </div>\n      </div>\n    </nav>\n    <div class=\"login-page\">\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-md-6 col-md-offset-3\">\n            <form>\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">KU Student ID</label>\n                <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Your ID\">\n              </div>\n            <button type=\"login\" class=\"btn btn-default\">Login</button>\n          </form>\n        </div>\n      </div>\n    </div>\n    </div>\n    </body>\n",
                        styles: ["\n  body{\n  font-family: 'Open Sans', sans-serif;\n  /*Backgroud-Colour*/\n  background: #76b852; /* fallback for old browsers */\n  background: -webkit-linear-gradient(right, #76b852, #8DC26F);\n  background: -moz-linear-gradient(right, #76b852, #8DC26F);\n  background: -o-linear-gradient(right, #76b852, #8DC26F);\n  background: linear-gradient(to left, #76b852, #8DC26F);\n  font-family: \"Roboto\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n\n  margin: 0 auto 0 auto;\n  width:100%;\n  text-align:center;\n  margin: 0px 0px 20px 0px;\n}\n.brand-img {\n    width: 50px;\n}\nform {\n  position: relative;\n  z-index: 1;\n  background: #FFFFFF;\n  max-width: 360px;\n  margin: 0 auto 100px;\n  padding: 45px;\n  text-align: center;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n}\nform button:hover,form button:active,form button:focus {\n  background: #43A047;\n}\nform button {\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  outline: 0;\n  background: #4CAF50;\n  width: 100%;\n  border: 0;\n  padding: 15px;\n  color: #FFFFFF;\n  font-size: 14px;\n  -webkit-transition: all 0.3 ease;\n  transition: all 0.3 ease;\n  cursor: pointer;\n}\n.login-page {\n\n  padding: 8% 0 0;\n  margin: auto;\n}\n"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            HEROES = [
                { "id": 11, "name": "Mr. Nice" },
                { "id": 12, "name": "Narco" },
                { "id": 13, "name": "Bombasto" },
                { "id": 14, "name": "Celeritas" },
                { "id": 15, "name": "Magneta" },
                { "id": 16, "name": "RubberMan" },
                { "id": 17, "name": "Dynama" },
                { "id": 18, "name": "Dr IQ" },
                { "id": 19, "name": "Magma" },
                { "id": 20, "name": "Tornado" }
            ];
        }
    }
});
//# sourceMappingURL=app.component.js.map