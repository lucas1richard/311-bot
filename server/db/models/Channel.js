const sequelize = require('../conn');

const { Sequelize } = sequelize;

const Channel = sequelize.define('channel', {
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4
  },
  lat: {
    type: Sequelize.STRING
  },
  long: {
    type: Sequelize.STRING
  },
  subject: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  }
});

module.exports = Channel;

