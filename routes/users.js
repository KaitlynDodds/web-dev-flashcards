const express = require('express');
const router = express.Router();


/* Routes
***************/

router.get('/', (req, res) => {
	res.render('user');
});

router.post('/', (req, res) => {
	if (req.body.username.trim()) {
		// set cookie 
		res.cookie('username', req.body.username);
		// redirect to welcome page 
		res.redirect('/');
	}
	throw new Error('Invalid Username');
});

module.exports = router;