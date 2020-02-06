const path = require('path');
const SRC_ROOT = path.join(__dirname, "src/js");
const DESC_BUILD = path.join(__dirname, "public/js");

module.exports = {
  entry: {
    app: path.join(SRC_ROOT, "app.js"),
    app2: path.join(SRC_ROOT, "app2.js"),
    app3: path.join(SRC_ROOT, "app3.js")
  },
  // entry: path.join(SRC_ROOT, "app.js"),
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js',
    path: DESC_BUILD,
  },
  target: 'web',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
        {
            // ローダーの処理対象ファイル
            test: /\.js$/,
            // ローダーの処理対象から外すディレクトリ
            // exclude: /[\\/]node_modules[\\/]/,
            exclude: /node_modules/,
            use: [
                {
                    // 利用するローダー
                    loader: 'babel-loader',
                    // ローダーのオプション
                    // 今回はbabel-loaderを利用しているため
                    // babelのオプションを指定しているという認識で問題ない
                    options: {
                        presets: [['@babel/preset-env', { modules: false }]]
                    }
                }
            ]
        },
    ]
},
};