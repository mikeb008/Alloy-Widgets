function WPATH(s) {
    var index = s.lastIndexOf("/"), path = index === -1 ? "ti.sandtonio.authentication/" + s : s.substring(0, index) + "/ti.sandtonio.authentication/" + s.substring(index + 1);
    return path.indexOf("/") !== 0 ? "/" + path : path;
}

function Controller() {
    function submit() {
        $.username.value && $.password.value ? handlers.success && handlers.success({
            username: $.username.value,
            password: $.password.value
        }) : handlers.error && handlers.error();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {};
    $.__views.widget = A$(Ti.UI.createView({
        id: "widget"
    }), "View", null);
    $.addTopLevelView($.__views.widget);
    $.__views.container = A$(Ti.UI.createScrollView({
        height: "100%",
        width: "100%",
        left: 0,
        backgroundColor: "#ddd",
        layout: "vertical",
        id: "container"
    }), "ScrollView", $.__views.widget);
    $.__views.widget.add($.__views.container);
    $.__views.username = A$(Ti.UI.createTextField({
        height: "40dp",
        width: "80%",
        top: "100dp",
        hintText: "Usuario",
        textAligh: "center",
        id: "username"
    }), "TextField", $.__views.container);
    $.__views.container.add($.__views.username);
    $.__views.password = A$(Ti.UI.createTextField({
        height: "40dp",
        width: "80%",
        top: "15dp",
        hintText: "Contraseña",
        textAlig: "center",
        passwordMask: !0,
        id: "password"
    }), "TextField", $.__views.container);
    $.__views.container.add($.__views.password);
    $.__views.submit = A$(Ti.UI.createButton({
        height: "40dp",
        width: "80%",
        top: "25dp",
        title: "Ingresar",
        textAlig: "center",
        id: "submit"
    }), "Button", $.__views.container);
    $.__views.container.add($.__views.submit);
    $.__views.submit.on("click", function() {
        submit.apply(this, Array.prototype.slice.apply(arguments));
    });
    _.extend($, $.__views);
    var HANDLERS = [ "success", "error" ], handlers = {};
    exports.setHandlers = function(args) {
        _.each(HANDLERS, function(h) {
            args[h] && (handlers[h] = args[h]);
        });
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;