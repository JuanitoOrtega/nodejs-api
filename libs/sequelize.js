const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('../db/models');

// const USER = encodeURIComponent(config.dbUser);
// const PASSWORD = encodeURIComponent(config.dbPassword);
// const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const options = {
    dialect: 'postgres',
    logging: config.isProd ? false : console.log
}

if (config.isProd) {
    options.dialectOptions = {
        ssl: {
            rejectUnathorized: false
        }
    }
}

const sequelize = new Sequelize(config.dbUrl, options);

setupModels(sequelize);
// sequelize.sync();

module.exports = sequelize;