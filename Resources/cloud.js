var Cloud = require("ti.cloud");

Cloud.debug = !0;

exports.login = function(args) {
    Cloud.Users.login({
        login: args.username,
        password: args.password
    }, function(e) {
        e.success ? args.success && args.success(e.users[0]) : args.error && args.error(e);
    });
};