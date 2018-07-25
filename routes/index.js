const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	if (!req.cookies.username) {
		res.redirect('/users');
	}
	res.render('index', {username: req.cookies.username});
});

module.exports = router;