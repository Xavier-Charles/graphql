const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

// connect to the mlab database
mongoose.connect('mongodb://xavier:test123@ds261644.mlab.com:61644/graphql');
mongoose.connection.once('open', () => {
	console.log('connected to database');
});

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true
	})
);

app.listen(4000, () => {
	console.log('Now listening on port 4000');
});
