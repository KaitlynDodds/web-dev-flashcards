const express = require('express');
const router = express.Router();

// Data File
const { data } = require('../data/flashcard-data.json');

router.get('/', (req, res) => {
	res.redirect('/topics');
});

module.exports = router;