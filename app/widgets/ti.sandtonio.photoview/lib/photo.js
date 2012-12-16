exports.showCamera = function(o){
	Titanium.Media.showCamera({
			success : function(event) {
				var image = event.media;
				if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
					if (o.success) { o.success(image); }
				}
			},
			cancel : function() {
				if (o.cancel) { o.cancel(); }				
			},
			error : function(error) {
				if (o.error) { o.error(); }
			},
			saveToPhotoGallery : false
		});
}