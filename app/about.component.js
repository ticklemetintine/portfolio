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
            template: "\n\t\t<div class=\"content\">\n\t\t\t<div class=\"row clearfix\">\n\t\t\t\t<div class=\"col-sm-6 col-xs-12\">\n\t\t\t\t\t<h1>{{heading}}</h1>\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda fugit, fugiat ipsam, explicabo harum, nam dolores dolorem corporis consequatur excepturi adipisci similique repellendus quod qui praesentium vero atque, porro quisquam.</p>\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt non iusto sequi quod iste quos, quia consectetur dolores quam libero nesciunt nostrum aliquid. Eos, hic quam blanditiis totam ut consequatur!</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6 col-xs-12\">\n\t\t\t\t\t<img src=\"http://placehold.it/400x400\" class=\"{{class.imgClass}}\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map