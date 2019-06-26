const config = require('./base/config');

let mode = config.NODE_ENV == 'development'?'development':'production';

module.exports = mode;