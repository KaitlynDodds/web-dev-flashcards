const express = require('express');
const router = express.Router();

// Data File
const { data } = require('../data/flashcard-data.json');


/* Routes
***************/

router.get('/', (req, res) => {
	// TODO: select random card from topic 
	const card_id = 0;

	res.redirect(`/topics/${res.locals.topic.title}/cards/${card_id}?side=question`);
});


router.get('/:card_id/next', (req, res) => {
	const { topic } = res.locals;
	const { card_id } = res.locals;

	// get next card id value
	let nxt_card_id = card_id + 1;
	
	if (nxt_card_id && nxt_card_id >= topic.cards.length) {
		// TODO: end of card list, redirect to finished topic page
		res.redirect('/');
	}

	res.redirect(`/topics/${topic.title}/cards/${nxt_card_id}?side=question`);
});


router.get('/:card_id', (req, res) => {
	const { topic } = res.locals;
	const { side } = res.locals;
	const { card_id } = res.locals;

	const card = topic.cards[card_id];	
	
	res.render('card', { 
		topic, 
		card, 
		side, 
		card_id 
	});
});






module.exports = router;