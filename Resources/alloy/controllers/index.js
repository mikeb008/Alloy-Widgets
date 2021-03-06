function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {};
    Alloy.Models.instance("user");
    _.extend($, $.__views);
    var user = Alloy.Models.user;
    user.set("id", "instance");
    user.fetch();
    Alloy.createController(user.authenticatedStatus() ? "home" : "login").getView().open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;