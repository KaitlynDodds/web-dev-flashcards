const express = require('express');
const router = express.Router();
const userMethods = require('../app_logic/user_methods');


/* Routes
***************/

router.get('/login', (req, res) => {
	res.render('login');
});

router.post('/login', (req, res) => {
	const username = req.body.username.trim();
	let user;
	
	try {
		user = userMethods.newUser(username);
	} catch (err) {
		throw err;
	}

	// set cookie 
	res.cookie('user', user);

	// redirect to welcome page 
	res.redirect('/');
});

router.get('/logout', (req, res) => {

	// clear cookies
	res.clearCookie('user');
	res.clearCookie('topic_id');

	// redirect back to login
	res.redirect('/users/login');
});

module.exports = router;