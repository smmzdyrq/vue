const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const isDev = process.env.NODE_ENV === "development";

const config = {
  target: "web",
  entry: path.join(__dirname, "src/index.js"),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, "dist")
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: "vue-loader"
    },
    {
      test:/\.jsx$/,
      loader: "vue-loader"
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
      ]
    },
    {
      test: /\.styl$/,
      use: [
        'style.loader',
        'css-loader',
        {
          loader:"postcss-loader",
          options: {
            sourceMap:true
          }
        },
        'stylus-loader'
      ]
    },
    {
      test: /\.(jpg|jpeg|png|svg|gif)/,
      use: [{
        loader: "url-loader",
        options: {
          limit: 1024,
          name: "[name].[ext]"
        }
      }]
    }
    ]
  },
  plugins: [
    // html模块
    new HTMLPlugin(),
    // 查看开发环境
    new webpack.DefinePlugin({
      'process.env' : {
        NODE_ENV: isDev? '"development"' : '"production"'
      }
    })
  ]
};

if(isDev) {
  config.devtool = "#cheap-module-eval-source-map",
  config.devServer = {
    port:8000,
    host:'0.0.0.0',
    // 将错误显示在网页上,方便查找
    overlay:{
      errors: true
    },
    // 在不刷新的情况下更改内容
    hot: true
  },
  config.plugins.push(
    // 在不刷新的情况下更改内容
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  );
}


module.exports = config;