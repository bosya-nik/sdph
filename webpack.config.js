const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    devServer: {
        open: true,
        hot: true,
        port: 8088
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            sources: false
                        }
                    },
                    'pug-html-loader'
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './src/assets'
                }
            ]
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/tpl/index.pug',
            inject: "body"
        })
    ]
};