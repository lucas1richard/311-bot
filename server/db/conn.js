const Sequelize = require( 'sequelize' );

module.exports = new Sequelize( 'postgres://localhost/threeoneonebot', { logging: false } );

