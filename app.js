const express 		= require('express');
const bodyParser 	= require('body-parser');
const cookieParser  = require('cookie-parser');

const cardsMiddleware = require('./routes/middleware/cards_middleware');

const indexRoutes 	= require('./routes');
const userRoutes 	= require('./routes/users');
const topicRoutes 	= require('./routes/topics');
const cardRoutes 	= require('./routes/cards');

const app 			= express();


/* Setup
***************/
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


/* Middleware
***************/

app.use('/topics/:topic_title/cards', 
	cardsMiddleware.checkTopicAndTopicId,	// check topic exists and matches topic id
	cardsMiddleware.setLocals				// set locals variable topic
);

app.use('/topics/:topic_title/cards/:id', 
	cardsMiddleware.checkCardId,
	cardsMiddleware.checkQueryString
);


/* Routes
***************/

app.use(indexRoutes);
app.use('/users', userRoutes);
app.use('/topics', topicRoutes);
app.use('/topics/:topic_title/cards', cardRoutes);


/* Middleware
***************/

// catch 404s
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// catch all errors thrown
// app.use((err, req, res, next) => {
// 	res.locals.error = err;
// 	res.status(err.status);
// 	next();
// });

/* Serve
***************/

app.listen(3000, () => {
	console.log('The application is running on localhost:3000');
});