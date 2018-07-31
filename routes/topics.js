const express = require('express');
const router = express.Router();

// Data File 
const { data } = require('../data/flashcard-data.json');


/* Routes
***************/

router.get('/:topic_title', (req, res) => {
	const topicTitle = req.params.topic_title;
	const { topics } = data;

	let topic_id;
	for (let i = 0; i < topics.length; i++) {
		if (topics[i].title === topicTitle) {
			topic_id = i;
			break;
		}
	}

	const topic = topics[topic_id];
	if (!topic) {
		throw new Error('Unknown Topic');
	}

	res.cookie('topic_id', topic_id);
	res.render('topic', { topic });
});


module.exports = router;