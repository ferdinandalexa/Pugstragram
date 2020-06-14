const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { dirname } = require('path');

JavaScriptRules = {
    test: /\.(js|mjs)$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
        }
    }
}

SvelteRules = {
    test: /\.svelte$/,
    exclude: /node_modules/,
    use: {
        loader: 'svelte-loader',
    },
}

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contentHash].js',
    },
    resolve: {
        extensions: ['.mjs', '.js', '.svelte'],
    },
    module: {
        rules: [
            JavaScriptRules,
            SvelteRules,
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html',
        })
    ],
}