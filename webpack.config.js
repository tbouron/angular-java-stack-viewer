var env = process.env.NODE_ENV || 'development';
var path = require('path');
var pkg = require('./package.json');
var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var banner = [
    pkg.name + ' by ' + pkg.author,
    pkg.homepage,
    'Version: ' + pkg.version + ' - ' + new Date().getTime(),
    'License: ' + pkg.license
].join('\n');

var entry = {};
entry[pkg.name] = [__dirname + '/src/stack-viewer.js'];
entry[pkg.name + '-nocss'] = [__dirname + '/src/stack-viewer-nocss.js'];

console.log('=> Building library for environment: ' + env);

var config = {
    entry: entry,
    devtool: 'source-map',
    output: {
        path: __dirname + '/lib',
        filename: '[name]' + (env === 'production' ? '.min' : '') + '.js',
        library: pkg.name,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.html$/,
                loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname, 'src')) + '/&prefix=templates/!html'
            }
        ]
    },
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.js']
    },
    externals: {
        angular: 'angular'
    },
    plugins: [
        new webpack.BannerPlugin(banner)
    ]
};

if (['production', 'ci'].indexOf(env) > -1) {
    config.plugins.push(new UglifyJsPlugin({
        mangle: true,
        compress: {
            drop_console: true,
            drop_debugger: true,
            warnings: false
        }
    }));
} else {
    config.watch = true;
}

module.exports = config;
