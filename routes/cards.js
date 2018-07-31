const express = require('express');
const router = express.Router();

// Data File
const { data } = require('../data/flashcard-data.json');


/* Routes
***************/

router.get('/', (req, res) => {
	const { topics } = data;
	const topic = topics[req.cookies.topic_id];

	// default to first card
	const card_id = 0;

	res.redirect(`/topics/${topic.title}/cards/${card_id}?side=question`);
});

router.get('/:card_id/next', (req, res) => {
	const { topics } = data;
	const topic = topics[req.cookies.topic_id];

	// get next card
	let nxt_card_id;
	try {
		nxt_card_id = parseInt(req.params.card_id) + 1;
	} catch (e) {
		throw new Error('Invalid Card Id');
	}
	
	if (nxt_card_id && nxt_card_id >= topic.cards.length) {
		// TODO: end of card list, redirect to finished topic page
		res.redirect('/');
	}

	res.redirect(`/topics/${topic.title}/cards/${nxt_card_id}?side=question`);
});

router.get('/:card_id', (req, res) => {
	const { topics } = data;
	const topic = topics[req.cookies.topic_id];

	const { side } = req.query;

	if (side || (side.toLowerCase() === 'answer' || side.toLowerCase() === 'question') ) {
		// invalid query string, default to 'question'
		throw new Error('Invalid Query String');
	}

	let card;
	try {
		card = topic.cards[req.params.card_id];	
	} catch (e) {
		throw new Error('Invalid Card Id');
	}

	res.render('card', { topic, card, card_id: req.params.card_id, side });
});


module.exports = router;