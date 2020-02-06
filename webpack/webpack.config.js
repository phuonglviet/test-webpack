const path = require('path');
const { StatsWriterPlugin } = require("webpack-stats-plugin")
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const glob = require('glob');

const SRC_ROOT = path.join(__dirname, "../src/js");
const SRC_CSS = path.join(__dirname, "../src/css");
const SRC_ROOT_ALL = path.join(__dirname, "../src/js/*.js*");
const DESC_BUILD = path.join(__dirname, "../public/js");
const DESC_BUILD_CSS = path.join(__dirname, "../public/css");
const DESC_BUILD_IMG = path.join(__dirname, "../public/img");
const SRC_MODULE = path.join(__dirname, "../src/js/modules");
const NODE_MODULES = path.join(__dirname, "../src/node_modules");


const prod = process.argv.indexOf('production') !== -1;

module.exports = {
  // target: 'web',
  entry: {
    app: path.join(SRC_ROOT, "app.js"),
    app2: path.join(SRC_ROOT, "app2.js"),
    app3: path.join(SRC_ROOT, "app3.js"),
    style: path.join(SRC_CSS, "style.css"),
    cart: path.join(SRC_CSS, "cart.css"),
  },
  output: {
    filename: (prod) ? "[name].[chunkhash].js" : "[name].js",
    chunkFilename: (prod) ? "[name].[chunkhash].js" : "[name].js",
    path: DESC_BUILD,
  },
  externals: {
    jquery: 'jQuery',
    lodash: '_',
    // 'velocity-animate': 'velocity',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      // cacheGroups内にバンドルの設定を複数記述できる
      cacheGroups: {
        vendorModules: {
          // 今回はsrc/js/modules配下にバンドルしたいモジュールが存在するため指定は以下になる
          // test: /src\/js\/modules/,
          test: SRC_MODULE,
          name: 'vendor-modules',
          chunks: 'initial',
          enforce: true,
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      }
    },
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  plugins: [
    // Output stats.json
    new StatsWriterPlugin({
      filename: "stats.json" // Default
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: (prod) ? "[name].[hash].css" : "[name].css",
      chunkFilename: (prod) ? "[id].[hash].css" : "[id].css",
    }),
  ],
  module: {
    rules: [
      {
        // Loads images into CSS and Javascript files
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf)$/,
        // use: [{ loader: 'file-loader' }, { loader: 'url-loader?limit=100000' }]
        use: [
          {
            loader: 'url-loader?limit=100000',
          }
        ],
        // options: { name: '/static/[name].[ext]' }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // esModule: true,
            },
          },
          'css-loader',
        ],
      },
    ],
  },
  // externals: [nodeExternals()], // update from 23.12.2018

};