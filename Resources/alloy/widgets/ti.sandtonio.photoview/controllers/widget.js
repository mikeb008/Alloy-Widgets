function WPATH(s) {
    var index = s.lastIndexOf("/"), path = index === -1 ? "ti.sandtonio.photoview/" + s : s.substring(0, index) + "/ti.sandtonio.photoview/" + s.substring(index + 1);
    return path.indexOf("/") !== 0 ? "/" + path : path;
}

function Controller() {
    function newPhoto() {
        takePhoto({
            success: function(image) {
                photos[numberPhotos] = Alloy.createWidget("ti.sandtonio.photoview", "view", {
                    id: numberPhotos,
                    image: image
                });
                $.listPhotos.add(photos[numberPhotos].getView());
                numberPhotos++;
            }
        });
    }
    function uploadPhotos() {
        _.each(_.keys(photos), function(photo) {
            Ti.API.info(photos[photo].image());
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
        newPhoto.apply(this, Array.prototype.slice.apply(arguments));
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
    var takePhoto = require("ti.sandtonio.photoview/photo").showCamera, numberPhotos = 0, photos = {};
    $.listPhotos.addEventListener("delete_view", function(e) {
        $.listPhotos.remove(photos[e.id].getView());
        delete photos[e.id];
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;