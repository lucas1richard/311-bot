const router = require('express').Router();
const db = require('../db');
const publish = require('../pubnub');

module.exports = router;


// Get list of all channels
router.get( '/', ( req, res, next ) => {
  db.Channel.findAll()
    .then( channels => res.json( channels ) )
    .catch( next );
} );

router.post('/', (req, res, next) => {
  publish(req.body.subject, req.body.message);
  db.Channel.create(req.body)
  .then(channel => res.json(channel))
  .catch(next);
});
