const path = require('path');
const { merge } = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const webpackConfigCommon = require('./webpack.config.common');

const webpackConfigProd = {
    mode: 'production',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist/js/')
    },
    module: {
        rules: [{
            test: /\.css/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../index.html',
            inject: false,
        }),
        new MiniCssExtractPlugin({
            filename: `../css/base.css`,
        })
    ]
};

module.exports = merge(webpackConfigCommon, webpackConfigProd);