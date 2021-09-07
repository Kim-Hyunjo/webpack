const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfigDev = {
    mode: 'development',
    output: {
        path: path.join(__dirname, '/javascripts'),
        filename: 'bundle.js',
        publicPath: '/javascripts'
    },
    module: {
        rules: [{
            test: /\.css/,
            use: [
                'style-loader',
                'css-loader',
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    devServer: {
        hot: false,
        host: '0.0.0.0',
        port: 3000,
        static: {
            directory: path.join(__dirname, '../src'),
        },
    },
    devtool: 'eval-cheap-module-source-map'
};

module.exports = merge(require('./webpack.config.common'), webpackConfigDev);