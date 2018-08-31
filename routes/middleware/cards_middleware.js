// Data File
const { data } = require('../../data/flashcard-data.json');

const cards_middleware = {};


// check that provides card id is int, and valid
cards_middleware.checkCardId = function(req, res, next) {
	const { topic } = res.locals;
	let id = parseInt(req.params.id);
	
	if ( (id === undefined || id === NaN) || topic.cards[id] === undefined ) {
		const err = new Error('Invalid Card Id');
		err.status = 500;
		return next(err);
	}

	res.locals.card_id = id;
	next();
}


// check that the url includes a valid query string
cards_middleware.checkQueryString = function(req, res, next) {
	const { side } = req.query;

	if (side && (side.toLowerCase() !== 'answer' && side.toLowerCase() !== 'question') ) {
		// invalid query string, default to 'question'
		const err = new Error('Invalid Query String');
		err.status = 500;
		return next(err);
	}

	res.locals.side = side;
	next();
}


module.exports = cards_middleware;
































