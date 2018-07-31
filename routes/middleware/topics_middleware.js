// Data File
const { data } = require('../../data/flashcard-data.json');

const topics_middleware = {};

// check for valid topic title
topics_middleware.checkTopic = function(req, res, next) {
	const { topics } = data;
	const { topic_title } = req.params;

	for (let i = 0; i < topics.length; i++) {
		if (topics[i].title.toLowerCase() === topic_title.toLowerCase()) {
			// topic exists, good to go
			res.cookie('topic_id', i);
			res.locals.topic = topics[i];
			return next();
		}
	}

	const err = new Error('Topic Does Not Exist');
	err.status = 500;
	next(err);
}

module.exports = topics_middleware;