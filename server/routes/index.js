const router = require('express').Router();
const app = require('../app');
const jwt = require('jwt-simple');

module.exports = router;

router.use((req, res, next) => {
  res.locals.jwtSecret = app.get('jwtSecret');
  if (req.query.token || req.headers.token) {
    res.locals.userId = jwt.decode(req.query.token || req.headers.token, app.get('jwtSecret'));
  }
  next();
});

router.use('/user', require('./user'));
router.use('/channel', require('./channel'));

