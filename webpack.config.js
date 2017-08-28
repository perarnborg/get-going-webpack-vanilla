"use strict";
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8888";

loaders.push({
    test: /\.scss?$/,
    loader: 'style-loader!css-loader!postcss-loader!sass-loader',
    include: path.join(__dirname, 'src', 'styles')
},
{
    test: /\.css?$/,
    loader: 'style-loader!css-loader!postcss-loader',
    include: path.join(__dirname, 'node_modules')
},
{
    test: /\.svg$/,
    loader: "url-loader",
    query: { mimetype: "image/svg+xml" }
},
{
    test: /\.woff$|\.woff2$/,
    // Inline small woff files.
    // Set mimetype just in case.
    loader: 'url',
    query: {
      name: 'font/[hash].[ext]',
      limit: 5000,
      mimetype: 'application/font-woff'
    }
},
{
    test: /\.ttf$|\.eot$/,
    loader: 'file',
    query: {
      name: 'font/[hash].[ext]'
    }
});


module.exports = {
    entry: [
        `webpack-dev-server/client?http://${HOST}:${PORT}`,
        `webpack/hot/only-dev-server`,
        `./src/index.js` // Your appʼs entry point
    ],
    node: {
      fs: 'empty'
    },
    devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        loaders
    },
    devServer: {
        contentBase: "./public",
        // do not print bundle build stats
        noInfo: true,
        // enable HMR
        hot: true,
        // embed the webpack-dev-server runtime into the bundle
        inline: true,
        // serve index.html in place of not-found responses to allow HTML5 history
        historyApiFallback: true,
        port: PORT,
        host: HOST,
        /*setup: function(app) {
            app.get('*', function (request, response){
                response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
            })
        },*/
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/template.html',
            title: '[DEV]Skogsägaren.se - Skogsvagnsväljaren'
        })
    ]
};
