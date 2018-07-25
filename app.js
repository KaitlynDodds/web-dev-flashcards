const express = require('express');

const indexRoutes = require('./routes');

const app = express();


/* Setup
***************/
app.set('view engine', 'pug');

/* Routes
***************/

app.use(indexRoutes);

/* Serve
***************/

app.listen(3000, () => {
	console.log('The application is running on localhost:3000');
});