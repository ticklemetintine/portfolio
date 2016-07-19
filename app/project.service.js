"use strict";
var ProjectService = (function () {
    function ProjectService() {
    }
    ProjectService.prototype.getProject = function () {
        return [
            { img: 'img/news.png', title: 'ABS-CBN News', description: 'A responsive site for ABS-CBN. Created using HTML, CSS/Sass and JQuery.', link: 'http://www.news.abs-cbn.com/' },
            { img: 'img/imaginepartners.png', title: 'Imagine Partners', description: 'Responsive website for Imagine Partners, USA. Created using WordPress', link: 'http://www.news.abs-cbn.com/' },
            { img: 'img/phillips.png', title: 'Phillips Family Law', description: 'Responsive website for Phillips Family Law, Australia. Created using WordPress', link: 'https://www.phillipsfamilylaw.com.au/' },
            { img: 'img/bpo.png', title: 'BPO BackOffice Inc', description: 'Responsive website for BPO BackOffice Inc., Philippines. Created using WordPress', link: 'http://www.bpobackoffice.com/' },
            { img: 'img/copiersleasing.png', title: 'Copiers Leasing Central', description: 'A static website for Copiers Leasing Central, USA. Created using HTML, CSS and Javascript/JQuery', link: 'http://www.copiersleasing.com/' },
            { img: 'img/metalbuilding.png', title: 'Metal Building Comparison', description: 'A static website for Metal Building Comparison, USA. Created using HTML, CSS and Javascript/JQuery', link: 'http://www.metalbuildingcomparison.com/' },
        ];
    };
    return ProjectService;
}());
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map