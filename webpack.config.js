var webpack = require('webpack');
var path = require("path");
var buildPath = path.resolve(__dirname,"build");
module.exports = {
    entry: [
        'webpack/hot/only-dev-server',
        "./app.js"
    ],
    output: {
        path: buildPath,
        filename: "/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    resolve:{
        extensions:['','.js','.json']
    },
    plugins: [
        //new webpack.NoErrorsPlugin()
    ]
};