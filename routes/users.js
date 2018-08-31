const express = require('express');
const router = express.Router();


/* Routes
***************/

router.get('/login', (req, res) => {
	res.render('login');
});

router.post('/login', (req, res) => {
	if (req.body.username.trim()) {
		// set cookie 
		res.cookie('username', req.body.username);
		// redirect to welcome page 
		res.redirect('/');
	}
	throw new Error('Invalid Username');
});

router.get('/logout', (req, res) => {
	// clear cookies
	res.clearCookie('username');
	res.clearCookie('topic_id');
	// redirect back to login
	res.redirect('/users/login');
});

module.exports = router;