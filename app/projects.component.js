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
var project_service_1 = require('./project.service');
var ProjectsComponent = (function () {
    function ProjectsComponent(projectService) {
        this.heading = "Projects";
        this.class = {
            mainClass: "home container",
            textAlign: "text-center",
            btnColor: "btn-pink",
            display: "block",
            imgClass: "avatar"
        };
        this.projectItems = projectService.getProject();
    }
    ProjectsComponent = __decorate([
        core_1.Component({
            selector: '.projects',
            template: "\n\t<div class=\"content\">\n\t\t<div class=\"row clearfix\">\n\t\t\t<h1 class=\"col-sm-12\">{{heading}}</h1>\n\t\t\t<div class=\"flip-container col-sm-4 col-xs-12\" ontouchstart=\"this.classList.toggle('hover');\" *ngFor=\"#projectItem of projectItems\">\n\t\t\t\t<div class=\"flipper\">\n\t\t\t\t\t<div class=\"front\">\n\t\t\t\t\t\t<img src=\"{{projectItem.img}}\" alt=\"\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"back\">\n\t\t\t\t\t\t<p class=\"{{class.textAlign}} title\">{{projectItem.title}}</p>\n\t\t\t\t\t\t<p class=\"{{class.textAlign}} description\">{{projectItem.description}}</p>\n\t\t\t\t\t\t<p class=\"{{class.textAlign}} link\"><a href=\"{{projectItem.link}}\">Visit site &raquo;</a></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t",
            providers: [project_service_1.ProjectService]
        }), 
        __metadata('design:paramtypes', [project_service_1.ProjectService])
    ], ProjectsComponent);
    return ProjectsComponent;
}());
exports.ProjectsComponent = ProjectsComponent;
//# sourceMappingURL=projects.component.js.map