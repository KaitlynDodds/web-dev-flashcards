const express = require('express');
const router = express.Router();

// Data File
const { data } = require('../data/flashcard-data.json');

router.get('/', (req, res) => {
	if (!req.cookies.username) {
		res.redirect('/users/login');
	}
	const { topics } = data;
	res.render('index', { username: req.cookies.username, topics });
});

module.exports = router;