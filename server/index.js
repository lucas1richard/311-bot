const express = require( 'express' );
const path = require( 'path' );
const app = express();

app.listen( 3000, () => console.log( 'Listening on 3000' ) );

app.use( '/vendor', express.static( path.join( __dirname, '..', 'node_modules' ) ) );
app.use( '/public', express.static( path.join( __dirname, '..', 'public' ) ) );

app.get( '*', ( req, res, next ) => {
  res.sendFile( path.join( __dirname, '..', 'public/index.html' ) );
} );

// const publish = require( './pubnub' );
// publish();

