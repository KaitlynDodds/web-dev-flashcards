const express = require('express');

const indexRoutes = require('./routes');
const userRoutes = require('./routes/users');

const app = express();


/* Setup
***************/
app.set('view engine', 'pug');


/* Routes
***************/

app.use(indexRoutes);
app.use('/users', userRoutes);


/* Serve
***************/

app.listen(3000, () => {
	console.log('The application is running on localhost:3000');
});