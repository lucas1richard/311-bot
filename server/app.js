const express = require( 'express' );

const app = express();

app.set('jwtSecret', process.env.JWT_SECRET || '1701-FLEX-NY');

module.exports = app;
