const _mode = require('./build/mode');
const _devtool = require('./build/devtool');
const _entry = require('./build/entry');
const _module = require('./build/module');
const _plugins = require('./build/plugins');
const _devServer = require('./build/devServer');
const _optimization = require('./build/optimization');
const _resolve = require('./build/resolve');
const _output = require('./build/output');



module.exports = {
	mode: _mode,
	devtool: _devtool,
	entry: _entry,	
	module: _module,
	plugins: _plugins,
	devServer: _devServer,
	optimization: _optimization,
	resolve: _resolve,
	output: _output	
}















