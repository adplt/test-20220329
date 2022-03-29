const Sequelize = require('sequelize');
var config = require('../config/env.config');

const db1 = new Sequelize(config.db1.name, config.db1.user, config.db1.pass, config.db1);

module.exports = {
    db1,
}