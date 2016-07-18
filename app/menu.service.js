"use strict";
var MenuService = (function () {
    function MenuService() {
    }
    MenuService.prototype.getMenu = function () {
        return ["home", "about", "projects", "contact"];
    };
    return MenuService;
}());
exports.MenuService = MenuService;
//# sourceMappingURL=menu.service.js.map