const express = require('express');
const router = express.Router();

// Data File 
const { data } = require('../data/flashcard-data.json');


/* Routes
***************/

router.get('/', (req, res) => {
	const { topics } = data;

	res.render('index', { username: req.cookies.username, topics })
});

router.get('/:topic_title', (req, res) => {
	const { topic } = res.locals;

	res.render('topic', { topic });
});


module.exports = router;