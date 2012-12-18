var user = Alloy.Models.user;
user.fetch();

$.home.on('click', function(){
	Alloy.createController('login').getView().open();
	$.home.close();
})
