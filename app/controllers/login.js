var cloud = require('cloud');
var user = Alloy.Models.user;

$.authentication.setHandlers({
	success:function(args){
		cloud.login({
			username : args.username,
			password : args.password,
			success: function(user){
				$.login.close();
				Alloy.createController('home').getView().open();				
			},
			error: function(error){
				alert(error);
			}			
		});
	},
	error: function(){
		alert('Error en los datos');
	}
});
