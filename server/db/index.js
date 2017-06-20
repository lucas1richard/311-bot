const db = require('./conn');

const User = require('./models/User');
const Channel = require('./models/Channel');
const Update = require('./models/Update');

User.belongsToMany(Channel, { through: 'userChannel' });
Channel.belongsToMany(User, { through: 'userChannel' });

Channel.hasMany(Update);
Update.belongsTo(Channel);

const sync = opt => db.sync(opt || null);

const seed = (opt) => {
  return sync(opt || null)
    .then(() => Channel.findAll())
    .then(channels => {
      if (!channels.length) {
        Channel.create({ lat: 10, long: 10 });
        Channel.create({ lat: 10, long: 10 });
        Channel.create({ lat: 10, long: 10 });
      }
    });
};

module.exports = {
  User,
  Channel,
  Update,
  sync,
  seed
};

