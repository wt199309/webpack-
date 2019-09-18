var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: {
        index: './src/js/entry.js',
        index2: './src/js/entry2.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/out',
        publicPath: './out'
    },
    module: {
        rules: [
            {test: /.js$/,use: ['babel-loader']},//凡是以.js结尾的文件以babel-loader来解析
            {test: /.css$/,use: ['style-loader','css-loader']},
            {test: /.jpg$/,use: ['url-loader?limit=8192&name=/[name].[ext]']}
        ]
    },
    plugins: [new UglifyJSPlugin()]
}