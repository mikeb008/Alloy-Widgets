//Setings
var takePhoto =require('ti.sandtonio.photoview/photo').showCamera;

var defaultImage = {
	width:'60dp',
	height:'60dp',
	backgroundColor:'white',
	left:'20dp',		
}

var defaultX = {
	width:'20dp',
	height:'20dp',
	right:0,
	top:0,
	backgroundColor: 'blue',
	bubbleParent:false,	
}

var numberPhotos = 0;

var UI = {};
UI.image = Ti.UI.createImageView;
UI.view = Ti.UI.createView;

$._photo = {};

function takePhoto(){
	var argsPhoto =  _.defaults(defaultImage, {id:numberPhotos });
	
	takePhoto({
		
	});
	
	$._photo[numberPhotos] = UI.image(argsPhoto);
	$._photo[numberPhotos].addEventListener('singletap', function(e){
		if(!this.edit){
			this.add(this.x);
			this.edit = true;
		}else{
			this.remove(this.x);
			this.edit = false;
		}		
	});	
	
	$._photo[numberPhotos].x =  UI.view(defaultX);	
	$._photo[numberPhotos].x.addEventListener('singletap', _.bind(function (e) { 
		Ti.API.info('delete'+this.id);		
		$.listPhotos.remove($._photo[this.id]);
		delete $._photo[this.id];
	}, {id:numberPhotos}));
	
	$.listPhotos.add($._photo[numberPhotos]);
	
	numberPhotos++;
}

function uploadPhotos(){
	Ti.API.info('UPload....')
	_.each(_.keys($._photo),
		function(photo){
			Ti.API.info(photo);
		}
	);
}
