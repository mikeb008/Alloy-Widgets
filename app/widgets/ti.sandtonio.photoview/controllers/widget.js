var takePhoto =require('ti.sandtonio.photoview/photo').showCamera;

var numberPhotos = 0;

var photos = {};

$.listPhotos.addEventListener('delete_view', function(e){
	$.listPhotos.remove(photos[e.id].getView());
	delete photos[e.id];
});

function newPhoto(){
	takePhoto({
		success:function(image){
			photos[numberPhotos] = Alloy.createWidget('ti.sandtonio.photoView', 'view', {id:numberPhotos});			
			$.listPhotos.add(photos[numberPhotos].getView());	
			numberPhotos++;	
		}
	});	
}

function uploadPhotos(){
	_.each(_.keys(photos),
		function(photo){
			Ti.API.info(photos[photo].image());
		}
	);
}
