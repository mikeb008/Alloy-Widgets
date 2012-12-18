function WPATH(s) {
    var index = s.lastIndexOf("/"), path = index === -1 ? "ti.sandtonio.authentication/" + s : s.substring(0, index) + "/ti.sandtonio.authentication/" + s.substring(index + 1);
    return path.indexOf("/") !== 0 ? "/" + path : path;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {};
    $.__views.widget = A$(Ti.UI.createScrollView({
        id: "widget"
    }), "ScrollView", null);
    $.addTopLevelView($.__views.widget);
    $.__views.container = A$(Ti.UI.createView({
        height: "100%",
        width: "100%",
        top: 0,
        left: 0,
        backgroundColor: "#ccc",
        layout: "vertical",
        id: "container"
    }), "View", $.__views.widget);
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
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;