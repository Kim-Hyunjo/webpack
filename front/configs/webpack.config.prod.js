const path = require('path');
const { merge } = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const webpackConfigCommon = require('./webpack.config.common');

const webpackConfigProd = {
    mode: 'production',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist/')
    },
    module: {
        rules: [{
            test: /\.css/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
            ]
        },
        {
            test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader',
            options: {
                name: '[name].[ext]',
                limit: 10000,
            },
        }]
    },

};

module.exports = merge(webpackConfigCommon, webpackConfigProd);