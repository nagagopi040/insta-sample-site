const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
    target: "node",
    entry: "./server.js",
    mode: "development",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
        publicPath: "/build"
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: "/node_modules/"
            }
        ]
    },
    externals: [webpackNodeExternals()]
}