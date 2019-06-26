const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');  //清除

module.exports = {
    mode:"production",
    entry:{
        'vendors': ['loadsh','jquery'],
        'vue': ['vue', 'vue-router']
    },
    plugins:[
        new CleanWebpackPlugin(),
        new webpack.DllPlugin({
            context: __dirname,
            name: '[name]',
            path: path.join(__dirname, 'dll', '[name].manifest.json')
        })        
    ],
    output:{
        path: path.resolve(__dirname, 'dll'),
        filename:'[name].dll.js',
        library: '[name]'
    }
}

