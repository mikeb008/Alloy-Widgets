function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {};
    $.__views.login = A$(Ti.UI.createWindow({
        backgroundColor: "red",
        id: "login"
    }), "Window", null);
    $.addTopLevelView($.__views.login);
    _.extend($, $.__views);
    var user = Alloy.Models.user;
    $.login.on("click", function() {
        user.login();
        Alloy.createController("home").getView().open();
        $.login.close();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;