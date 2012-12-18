var user = Alloy.Models.user;

$.login.on('click', function(){
	user.login();
	Alloy.createController('home').getView().open();
	$.login.close();
});
