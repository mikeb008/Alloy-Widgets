exports.showCamera = function(o) {
    Titanium.Media.showCamera({
        success: function(event) {
            var image = event.media;
            event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO && o.success && o.success(image);
        },
        cancel: function() {
            o.cancel && o.cancel();
        },
        error: function(error) {
            o.error && o.error();
        },
        saveToPhotoGallery: !1
    });
};