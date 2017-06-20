const router = require('express').Router();
const db = require('../db');
const { publish, subscribe, emit } = require('../pubnub');

module.exports = router;


// Get list of all channels
router.get('/', (req, res, next) => {
  let user, subscribed, all;

  db.User.scope('subscribed').findById(res.locals.userId)
    .then(_user => {
      user = _user;
      subscribed = user.channels;
      subscribe(subscribed.map(ch => ch.subject));
      return db.Channel.findAll();
    })
    .then(channels => {
      all = channels;
      res.json({ all, subscribed });
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  let channel, user;

  publish(req.body.subject, req.body.description);
  db.User.findById(res.locals.userId)
    .then(_user => {
      user = _user;
      return db.Channel.create(req.body);
    })
    .then(_channel => {
      channel = _channel;
      return db.Update.create({ txt: 'Issue submitted' });
    })
    .then(update => channel.addUpdate(update))
    .then(() => user.addChannel(channel))
    .then(() => res.json(channel))
    .catch(next);
});

router.get('/subscribe/:channelId', (req, res, next) => {
  let user, channel;
  db.User.findById(res.locals.userId)
    .then(_user => {
      user = _user;
      return db.Channel.findById(req.params.channelId);
    })
    .then(_channel => {
      channel = _channel;
      user.addChannel(channel);
      subscribe(channel.subject);
    })
    .then(() => res.json(channel));
});

router.post('/update/:subject', (req, res, next) => {
  emit(req.params.subject, req.body.update);
  let update;

  db.Update.create({ txt: req.body.update })
    .then(_update => {
      update = _update;
      return db.Channel.findOne({
        where: {
          subject: req.params.subject
        }
      });
    })
    .then(channel => channel.addUpdate(update))
    .then(() => res.sendStatus(200));
});

