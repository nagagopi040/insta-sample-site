const path = require("path");

module.exports = {
    target: "node",
    entry: "./src/client.js",
    mode: "development",
    output: {
        filename: "client_bundle.js",
        path: path.resolve(__dirname, "build/public"),
        publicPath: "/build/public"
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: "/node_modules/"
            },
            {
                test: /\.css$/,
                use: ["css-loader", "style-loader"]
            }
        ]
    }
}