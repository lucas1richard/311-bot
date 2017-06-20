const sequelize = require('../conn');

const { Sequelize } = sequelize;

const Update = sequelize.define('update', {
  txt: {
    type: Sequelize.STRING
  }
});

module.exports = Update;

