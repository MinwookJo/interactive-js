/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const client = {
    entry: {
        app: ['./src/index.js']
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'app.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.m?(js)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/public/index.html',
            filename: 'index.html'
        })
    ]
};

module.exports = [client];
