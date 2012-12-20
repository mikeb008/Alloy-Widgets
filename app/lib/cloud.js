var Cloud = require('ti.cloud');
Cloud.debug = true;

exports.login = function(args){      
	Cloud.Users.login({
		login: args.username,
		password: args.password
		}, function (e) {     		     
			if (e.success) {
				if(args.success){args.success(e.users[0])}
			}else{
				if(args.error){args.error(e)}								
		}              
	});
}
