function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {};
    $.__views.home = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        id: "home"
    }), "Window", null);
    $.addTopLevelView($.__views.home);
    _.extend($, $.__views);
    var user = Alloy.Models.user;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;