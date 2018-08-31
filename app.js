const express 		= require('express');
const bodyParser 	= require('body-parser');
const cookieParser  = require('cookie-parser');

const cardsMiddleware 	= require('./routes/middleware/cards_middleware');
const topicsMiddleware 	= require('./routes/middleware/topics_middleware');
const userMiddleware 	= require('./routes/middleware/user_middleware');

const indexRoutes 	= require('./routes');
const userRoutes 	= require('./routes/users');
const topicRoutes 	= require('./routes/topics');
const cardRoutes 	= require('./routes/cards');

const app 			= express();


/* Setup
***************/
app.set('view engine', 'pug');
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


/* Unauthenticated Routes
***************/

app.use('/users', userRoutes);


/* Middleware
***************/

// authenticate before all routes 
app.use(userMiddleware.authenticate);

// ensure topic_title is valid 
app.use('/topics/:topic_title', topicsMiddleware.checkTopic);

// ensure card id and provided query string are valid
app.use('/topics/:topic_title/cards/:id', 
	cardsMiddleware.checkCardId,
	cardsMiddleware.checkQueryString
);


/* Routes
***************/

app.use(indexRoutes);
app.use('/topics', topicRoutes);
app.use('/topics/:topic_title/cards', cardRoutes);


/* Error Handling Middleware
*****************************/

// catch 404s
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// catch all errors thrown by app routes
app.use((err, req, res, next) => {
	err.status = 500;
	res.render('error', { error: err });
});


/* Serve
***************/

app.listen(3000, () => {
	console.log('The application is running on localhost:3000');
});