const router = require('express').Router();
const db = require('../db');
const jwt = require('jwt-simple');

module.exports = router;

router.post('/', (req, res, next) => {
  db.User.create({
      email: req.body.email,
      password: req.body.password
    })
    .then(user => {
      user = Object.assign({}, user.get(), { token: jwt.encode(user.id, res.locals.jwtSecret) });

      return res.json(user);
    })
    .catch(next);
});

router.get('/', (req, res, next) => {
  db.User.findById(res.locals.userId)
    .then(user => res.json(user));
});

