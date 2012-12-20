function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {};
    $.__views.login = A$(Ti.UI.createWindow({
        navBarHidden: !0,
        backgroundColor: "#ccc",
        exitOnClose: !0,
        id: "login"
    }), "Window", null);
    $.addTopLevelView($.__views.login);
    $.__views.authentication = Alloy.createWidget("ti.sandtonio.authentication", "widget", {
        id: "authentication"
    });
    $.__views.authentication.setParent($.__views.login);
    _.extend($, $.__views);
    var cloud = require("cloud"), user = Alloy.Models.user;
    $.authentication.setHandlers({
        success: function(args) {
            cloud.login({
                username: args.username,
                password: args.password,
                success: function(user) {
                    $.login.close();
                    Alloy.createController("home").getView().open();
                },
                error: function(error) {
                    alert(error);
                }
            });
        },
        error: function() {
            alert("Error en los datos");
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;