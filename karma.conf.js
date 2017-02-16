var env = process.env.NODE_ENV || 'development';
var webpackConfig = require('./webpack.config');

// Update the webpack config to add the coverage loader (and don't mess with the eslint!)
webpackConfig.devtool = 'inline-source-map';
webpackConfig.module.preLoaders[0].loader = 'isparta!' + webpackConfig.module.preLoaders[0].loader;

console.log('=> Executing test for environment: ' + env);

module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],
        reporters: ['progress', 'coverage'],
        browsers: ['PhantomJS'],
        files: [
            'node_modules/angular/angular.js',
            'node_modules/babel-polyfill/dist/polyfill.js',
            {pattern: 'src/*.spec.js', watched: true}
        ],
        preprocessors: {
            'src/*.spec.js': ['webpack', 'sourcemap']
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            stats: 'errors-only'
        },
        coverageReporter: {
            type: 'lcov'
        },
        autoWatch: env !== 'ci',
        colors: env !== 'ci',
        singleRun: env === 'ci'
    });
};
