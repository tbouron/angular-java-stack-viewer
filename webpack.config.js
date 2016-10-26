var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var path = require('path');
var env = require('yargs').argv.mode;
var pkg = require('./package.json');

var entry = {};
entry[pkg.name] = __dirname + '/src/stack-viewer.js';
entry[pkg.name + '-nocss'] = [__dirname + '/src/stack-viewer-nocss.js'];

var plugins = [], outputFile;

if (env === 'build') {
    plugins.push(new UglifyJsPlugin({ minimize: true }));
    outputFile = '[name].min.js';
} else {
    outputFile = '[name].js';
}

var config = {
    entry: entry,
    devtool: 'source-map',
    output: {
        path: __dirname + '/lib',
        filename: outputFile,
        library: pkg.name,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            // {
            //     test: /\.js$/,
            //     loader: 'eslint-loader',
            //     exclude: /node_modules/
            // },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.html$/,
                loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname, './src')) + '/&prefix=templates/!html'
            }
        ]
    },
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.js']
    },
    externals: {
        angular: 'angular',
    },
    plugins: plugins
};

module.exports = config;