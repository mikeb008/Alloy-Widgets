var args = arguments[0] || {};
$.view.id = args.id;
$.view.image = args.image || '';
$.iconDelete.id = args.id;

$.view.addEventListener('singletap', function(e){
	if(!e.source.edit){
		e.source.edit = true;
		$.iconDelete.visible = true;
	}else{
		e.source.edit = false;
		$.iconDelete.visible = false;
	}
});

$.iconDelete.addEventListener('singletap', function(e){
	$.view.fireEvent('delete_view', {id: this.id }); 
});

exports.image = function(){
	return $.iconDelete.id;	
}
