const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");

const clientConfig = {
  entry: "./src/client/index.js",
  output: {
    path: __dirname,
    filename: "./public/bundle.js",
    globalObject: "this"
  },
  devtool: "cheap-module-source-map",
  mode: "development",
  module: {
    rules: [{
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: "file-loader",
        options: {
          name: "static/images/[name].[ext]",
          publicPath: url => url.replace(/static/, "")
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [{
              loader: "css-loader",
              options: {
                importLoaders: 1
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: [autoprefixer()]
              }
            }
          ]
        })
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader",
          options: {
            implementation: require("sass")
          }
        }]
      },
      {
        test: /js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "static/scss/[name].scss"
    })
  ]
};

const serverConfig = {
  entry: "./src/server/index.js",
  target: "node",
  output: {
    path: __dirname,
    filename: "./public/server.js",
    libraryTarget: "commonjs2",
    globalObject: "this"
  },
  devtool: "cheap-module-source-map",
  mode: "development",
  module: {
    rules: [{
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: "file-loader",
        options: {
          name: "static/images/[name].[ext]",
          publicPath: url => url.replace(/static/, ""),
          emit: false
        }
      },
      {
        test: /\.css$/,
        use: [{
          loader: "css-loader"
        }]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader",
          options: {
            implementation: require("sass")
          }
        }]
      },
      {
        test: /js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader"
      }
    ]
  }
};

module.exports = [clientConfig, serverConfig];