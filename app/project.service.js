"use strict";
var ProjectService = (function () {
    function ProjectService() {
    }
    ProjectService.prototype.getProject = function () {
        return [
            { img: 'img/news.png', title: 'ABS-CBN News', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dolorem natus tempore, atque neque necessitatibus. Quisquam eaque adipisci voluptas, eos temporibus neque aliquam dolore laudantium nihil. Possimus consectetur, natus accusantium?', link: 'http://www.news.abs-cbn.com/' },
            { img: 'img/phillips.png', title: 'Phillips Family Law', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius veritatis repellat consequatur officia, recusandae quam, voluptatibus a magni, eligendi cum iusto. Quaerat amet, quae facilis, placeat sapiente quos cumque minima.', link: 'https://www.phillipsfamilylaw.com.au/' },
            { img: 'img/bpo.png', title: 'BPO BackOffice Inc', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi commodi blanditiis, ea, velit, accusantium doloremque quae laudantium modi ab molestias sequi ducimus eum libero ipsa obcaecati? Nihil incidunt nostrum ex?', link: 'http://www.bpobackoffice.com/' },
            { img: 'img/copiersleasing.png', title: 'Copiers Leasing Central', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque officiis voluptatum repellat non sunt modi dolorum ab repudiandae iure dolores, corrupti nesciunt, fuga necessitatibus, quia sit illum, praesentium impedit at.', link: 'http://www.copiersleasing.com/' },
            { img: 'img/metalbuilding.png', title: 'Metal Building Comparison', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat odio vero incidunt a autem deserunt quia, earum! Hic excepturi, laboriosam quas deleniti dolorem officia ratione dolor ipsam architecto laudantium repudiandae.', link: 'http://www.metalbuildingcomparison.com/' },
        ];
    };
    return ProjectService;
}());
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map