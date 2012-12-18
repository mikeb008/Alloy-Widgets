var user = Alloy.Models.user;
user.set('id', "instance");
user.fetch();

Alloy.createController(user.authenticatedStatus() ? 'home' : 'login').getView().open();
