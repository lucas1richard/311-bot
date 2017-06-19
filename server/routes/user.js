const router = require( 'express' ).Router();
const db = require( '../db' );

module.exports = router;

router.post( '/', ( req, res, next ) => {
  db.User.create( {
      email: req.body.email,
      password: req.body.password
    } )
    .then( user => res.json( user ) )
    .catch( next );
} );

