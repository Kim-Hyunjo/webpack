const path = require('path');
const { merge } = require('webpack-merge');

const webpackConfigDev = {
    mode: 'development',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /.(css|sass|scss)$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ]
        }]
    },

    devServer: {
        hot: false,
        host: '0.0.0.0',
        port: 3000,
        static: {
            directory: path.join(__dirname, '../'),
        },
    },
    devtool: 'eval-cheap-module-source-map'
};

module.exports = merge(require('./webpack.config.common'), webpackConfigDev);