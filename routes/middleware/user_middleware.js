const user_middleware = {};

user_middleware.authenticate = function(req, res, next) {
	if (!req.cookies.username) {
		res.redirect('/users/login');
	}

	next();
}

module.exports = user_middleware;