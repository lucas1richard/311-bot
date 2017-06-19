const db = require( './conn' );

const User = require( './models/User' );
const Channel = require( './models/Channel' );

User.belongsToMany( Channel, { through: 'userChannel' } );
Channel.belongsToMany( User, { through: 'userChannel' } );

const sync = opt => db.sync( opt || null );

module.exports = {
  User,
  Channel,
  sync
};

