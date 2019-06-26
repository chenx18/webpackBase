const config = require('./base/config');

let devtool = config.NODE_ENV == 'development'?'cheap-eval-source-map':'cheap-source-map';

module.exports = devtool;