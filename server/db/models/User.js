const sequelize = require('../conn');
const Channel = require('./Channel');

const { Sequelize } = sequelize;

const User = sequelize.define('user', {
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
}, {
  scopes: {
    subscribed: {
      include: [Channel]
    }
  }
});

module.exports = User;

