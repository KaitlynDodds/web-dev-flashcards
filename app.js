const express 		= require('express');
const bodyParser 	= require('body-parser');
const cookieParser  = require('cookie-parser');

const indexRoutes 	= require('./routes');
const userRoutes 	= require('./routes/users');

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


/* Serve
***************/

app.listen(3000, () => {
	console.log('The application is running on localhost:3000');
});