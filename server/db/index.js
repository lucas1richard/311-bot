const db = require('./conn');

const User = require('./models/User');
const Channel = require('./models/Channel');

User.belongsToMany(Channel, { through: 'userChannel' });
Channel.belongsToMany(User, { through: 'userChannel' });

const sync = opt => db.sync(opt || null);

const seed = (opt) => {
  return sync(opt || null)
    .then(() => {
      Channel.create({ lat: 10, long: 10 });
      Channel.create({ lat: 10, long: 10 });
      Channel.create({ lat: 10, long: 10 });
    });
};

module.exports = {
  User,
  Channel,
  sync,
  seed
};

