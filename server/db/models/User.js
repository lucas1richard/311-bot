const sequelize = require('../conn');

const { Sequelize } = sequelize;

const User = sequelize.define('user', {
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
});

module.exports = User;
