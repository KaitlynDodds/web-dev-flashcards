const express 		= require('express');
const bodyParser 	= require('body-parser');
const cookieParser  = require('cookie-parser');

const indexRoutes 	= require('./routes');
const userRoutes 	= require('./routes/users');
const topicRoutes 	= require('./routes/topics');

const app 			= express();


/* Setup
***************/
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


/* Routes
***************/

app.use(indexRoutes);
app.use('/users', userRoutes);
app.use('/topics', topicRoutes);


/* Serve
***************/

app.listen(3000, () => {
	console.log('The application is running on localhost:3000');
});