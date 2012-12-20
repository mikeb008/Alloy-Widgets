var HANDLERS = ['success', 'error'];
var handlers = {};

exports.setHandlers = function(args) {
	_.each(HANDLERS, function(h) {
		if (args[h]) {
			handlers[h] = args[h];
		}
	});
}

function submit(){
	if($.username.value && $.password.value){
		if(handlers['success']) handlers['success']({
			username: $.username.value,
			password: $.password.value
		});
	}else{
		if(handlers['error']) handlers['error']();
	}
}