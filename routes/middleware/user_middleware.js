const user_middleware = {};

user_middleware.authenticate = function(req, res, next) {
	if (!req.cookies.user) {
		res.redirect('/users/login');
	}

	res.locals.user = req.cookies.user;

	next();
}

module.exports = user_middleware;