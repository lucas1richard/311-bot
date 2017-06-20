const express = require('express');
const app = require('./app');
const path = require('path');
const db = require('./db');

db.seed();

app.listen(process.env.PORT || 3000, () => console.log(`Listening on ${process.env.PORT || 3000}`));

app.use(require('body-parser').json());
app.use('/vendor', express.static(path.join(__dirname, '..', 'node_modules')));
app.use('/public', express.static(path.join(__dirname, '..', 'public')));

app.use('/api', require('./routes'));

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// const publish = require( './pubnub' );
// publish();

