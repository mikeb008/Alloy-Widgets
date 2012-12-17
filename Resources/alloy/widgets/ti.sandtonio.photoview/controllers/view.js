function WPATH(s) {
    var index = s.lastIndexOf("/"), path = index === -1 ? "ti.sandtonio.photoview/" + s : s.substring(0, index) + "/ti.sandtonio.photoview/" + s.substring(index + 1);
    return path;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {};
    $.__views.view = A$(Ti.UI.createImageView({
        width: "60dp",
        height: "60dp",
        backgroundColor: "white",
        left: "20dp",
        edit: !1,
        id: "view"
    }), "ImageView", null);
    $.addTopLevelView($.__views.view);
    $.__views.iconDelete = A$(Ti.UI.createImageView({
        width: "20dp",
        height: "20dp",
        right: 0,
        top: 0,
        backgroundColor: "blue",
        bubbleParent: !1,
        id: "iconDelete",
        visible: "false"
    }), "ImageView", $.__views.view);
    $.__views.view.add($.__views.iconDelete);
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.view.id = args.id;
    $.iconDelete.id = args.id;
    $.view.addEventListener("singletap", function(e) {
        if (!e.source.edit) {
            e.source.edit = !0;
            $.iconDelete.visible = !0;
        } else {
            e.source.edit = !1;
            $.iconDelete.visible = !1;
        }
    });
    $.iconDelete.addEventListener("singletap", function(e) {
        $.view.fireEvent("delete_view", {
            id: this.id
        });
    });
    exports.image = function() {
        return $.iconDelete.id;
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;