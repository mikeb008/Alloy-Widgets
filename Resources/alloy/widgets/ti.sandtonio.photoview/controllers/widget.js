function WPATH(s) {
    var index = s.lastIndexOf("/"), path = index === -1 ? "ti.sandtonio.photoview/" + s : s.substring(0, index) + "/ti.sandtonio.photoview/" + s.substring(index + 1);
    return path;
}

function Controller() {
    function takePhoto() {
        var argsPhoto = _.defaults(defaultImage, {
            id: numberPhotos
        });
        $._photo[numberPhotos] = UI.image(argsPhoto);
        $._photo[numberPhotos].addEventListener("singletap", function(e) {
            if (!this.edit) {
                this.add(this.x);
                this.edit = !0;
            } else {
                this.remove(this.x);
                this.edit = !1;
            }
        });
        $._photo[numberPhotos].x = UI.view(defaultX);
        $._photo[numberPhotos].x.addEventListener("singletap", _.bind(function(e) {
            Ti.API.info("delete" + this.id);
            $.listPhotos.remove($._photo[this.id]);
            delete $._photo[this.id];
        }, {
            id: numberPhotos
        }));
        $.listPhotos.add($._photo[numberPhotos]);
        numberPhotos++;
    }
    function uploadPhotos() {
        Ti.API.info("UPload....");
        _.each(_.keys($._photo), function(photo) {
            Ti.API.info(photo);
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {};
    $.__views.mainView = A$(Ti.UI.createView({
        top: 0,
        left: 0,
        width: "100%",
        height: Ti.UI.SIZE,
        backgroundColor: "red",
        layout: "vertical",
        id: "mainView"
    }), "View", null);
    $.addTopLevelView($.__views.mainView);
    $.__views.options = A$(Ti.UI.createView({
        width: "100%",
        height: "35dp",
        backgroundColor: "red",
        id: "options"
    }), "View", $.__views.mainView);
    $.__views.mainView.add($.__views.options);
    $.__views.camera = A$(Ti.UI.createImageView({
        width: "35dp",
        height: "35dp",
        left: 10,
        image: "/ti.sandtonio.photoview/camera.png",
        id: "camera"
    }), "ImageView", $.__views.options);
    $.__views.options.add($.__views.camera);
    $.__views.camera.on("click", function() {
        takePhoto.apply(this, Array.prototype.slice.apply(arguments));
    });
    $.__views.submit = A$(Ti.UI.createImageView({
        width: "35dp",
        height: "35dp",
        right: 10,
        image: "/ti.sandtonio.photoview/submit.png",
        id: "submit"
    }), "ImageView", $.__views.options);
    $.__views.options.add($.__views.submit);
    $.__views.submit.on("click", function() {
        uploadPhotos.apply(this, Array.prototype.slice.apply(arguments));
    });
    $.__views.listPhotos = A$(Ti.UI.createScrollView({
        width: "100%",
        height: "80dp",
        backgroundColor: "#ccc",
        layout: "horizontal",
        id: "listPhotos"
    }), "ScrollView", $.__views.mainView);
    $.__views.mainView.add($.__views.listPhotos);
    _.extend($, $.__views);
    var defaultImage = {
        width: "60dp",
        height: "60dp",
        backgroundColor: "white",
        left: "20dp"
    }, defaultX = {
        width: "20dp",
        height: "20dp",
        right: 0,
        top: 0,
        backgroundColor: "blue",
        bubbleParent: !1
    }, numberPhotos = 0, UI = {};
    UI.image = Ti.UI.createImageView;
    UI.view = Ti.UI.createView;
    $._photo = {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;