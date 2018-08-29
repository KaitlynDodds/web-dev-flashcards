const express = require('express');
const router = express.Router();

// Data File 
const { data } = require('../data/flashcard-data.json');


/* Routes
***************/

router.get('/', (req, res) => {
	const { topics } = data;

	// clear topic_id cookie
	res.clearCookie('topic_id');

	res.render('topics', { username: req.cookies.username, topics })
});


router.get('/:topic_title', (req, res) => {
	const { topic } = res.locals;

	res.render('flashcard', { topic });
});


module.exports = router;