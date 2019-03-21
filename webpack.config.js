
const merge = require('webpack-merge');
const common = require('./config/webpack.common.config');

const envs = {
    development: 'dev',
    production: 'prod'
};

const env = envs[process.env.NODE_ENV || 'development'];
const envConfig = require(`./config/webpack.${env}.config`);
module.exports = merge(common, envConfig);