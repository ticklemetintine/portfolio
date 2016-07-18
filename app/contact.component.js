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
var ContactComponent = (function () {
    function ContactComponent() {
        this.heading = "Contact";
        this.buttonText = "See my work";
        this.class = {
            textAlign: "text-center",
            btnColor: "btn-pink",
            display: "block",
            imgClass: "avatar"
        };
    }
    ContactComponent = __decorate([
        core_1.Component({
            selector: '.contact',
            template: "\n\t\t<div class=\"content\">\n\t\t\t<div class=\"row clearfix\">\n\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t<h1>{{heading}}</h1>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6 col-xs-12\">\n\t\t\t\t\t <iframe id=\"JotFormIFrame\" onload=\"window.parent.scrollTo(0,0)\" allowtransparency=\"true\" src=\"https://form.jotform.me/61931682181457\" frameborder=\"0\" style=\"width:100%; height:616px; border:none;\" scrolling=\"no\"> </iframe> <script type=\"text/javascript\"> window.handleIFrameMessage = function(e) { var args = e.data.split(\":\"); var iframe = document.getElementById(\"JotFormIFrame\"); if (!iframe) return; switch (args[0]) { case \"scrollIntoView\": iframe.scrollIntoView(); break; case \"setHeight\": iframe.style.height = args[1] + \"px\"; break; case \"collapseErrorPage\": if (iframe.clientHeight > window.innerHeight) { iframe.style.height = window.innerHeight + \"px\"; } break; case \"reloadPage\": window.location.reload(); break; } var isJotForm = (e.origin.indexOf(\"jotform\") > -1) ? true : false; if(isJotForm && \"contentWindow\" in iframe && \"postMessage\" in iframe.contentWindow) { var urls = {\"docurl\":encodeURIComponent(document.URL),\"referrer\":encodeURIComponent(document.referrer)}; iframe.contentWindow.postMessage(JSON.stringify({\"type\":\"urls\",\"value\":urls}), \"*\"); } }; if (window.addEventListener) { window.addEventListener(\"message\", handleIFrameMessage, false); } else if (window.attachEvent) { window.attachEvent(\"onmessage\", handleIFrameMessage); } if(window.location.href && window.location.href.indexOf(\"?\") > -1) { var ifr = document.getElementById(\"JotFormIFrame\"); var get = window.location.href.substr(window.location.href.indexOf(\"?\") + 1); if(ifr && get.length > 0) { var src = ifr.src; src = src.indexOf(\"?\") > -1 ? src + \"&\" + get : src + \"?\" + get; ifr.src = src; } } </script>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6 col-xs-12 details\">\n\t\t\t\t\t<p><i class=\"glyphicon glyphicon-envelope\"></i> <span class=\"pull-right\"><a href= \"mailto:tine.salangsang@gmail.com\" >tine.salangsang@gmail.com</a></span></p>\n\t\t\t\t\t<p><i class=\"glyphicon glyphicon-phone\"></i> <span class=\"pull-right\">+63 905 391 7320</span></p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map