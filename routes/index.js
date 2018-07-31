const express = require('express');
const router = express.Router();

// Data File
const { data } = require('../data/flashcard-data.json');

router.get('/', (req, res) => {
	if (!req.cookies.username) {
		res.redirect('/users/login');
	}
	
	res.redirect('/topics');
});

module.exports = router;