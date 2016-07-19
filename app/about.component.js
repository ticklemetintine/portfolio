"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AboutComponent = (function () {
    function AboutComponent() {
        this.heading = "About";
        this.buttonText = "See my work";
        this.class = {
            textAlign: "text-center",
            btnColor: "btn-pink",
            display: "block",
            imgClass: "avatar"
        };
    }
    AboutComponent = __decorate([
        core_1.Component({
            selector: '.about',
            template: "\n\t\t<div class=\"content\">\n\t\t\t<div class=\"row clearfix\">\n\t\t\t\t<div class=\"col-sm-6 col-xs-12\">\n\t\t\t\t\t<h1>{{heading}}</h1>\n\t\t\t\t\t<p>A web developer based in the Philippines. Finished a degree in Information Technology at FEU-Institute of Technology. Been in the industry for more than 3 years and have worked with some big companies in the PH. A freelance developer servicing clients from US and Australia.</p>\n\t\t\t\t\t<p>Expertise in HTML, CSS/Sass, JQuery/AngularJS and WordPress.</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6 col-xs-12\">\n\t\t\t\t\t<img src=\"img/myAvatar.png\" class=\"{{class.imgClass}}\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map