const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 分离css文件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //压缩css插件
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 删除指定目录插件

module.exports = {
  entry: {
    index: './src/index.js',
    404: './src/404.js',
    // jquery:'jquery',
    // bootstrap:'bootstrap'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].bundle-[hash].js'
  },
  devServer: {
    contentBase: "./public",
    //本地服务路径
    inline: true
    //实时刷新
  },
  module: {

    rules: [{
        test: /\.(jsx|js)/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../',
              transform: "css/[name].js"
            }
          },
          "css-loader"
        ]
      },
      {
        test: /\.(jpg|png|jpeg|gif|cur)$/,
        use: 'url-loader?limit=50000&name=./img/[name].[ext]'
      },
      {
        test: /\.html$/,
        use: 'html-withimg-loader'
      },
      {
        test: /\.(woff|ttf|svg|eot|xttf|woff2)$/,
        use: 'url-loader?limit=5000&name=./fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['public']), //传入数组,指定要删除的目录
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/[name].css",
      chunkFilename: "[id].css"
    }),
    // 引入jquery
    // new webpack.ProvidePlugin({
    //   "$": "jquery",
    //   "jQuery": "jquery"
    // }),
    new OptimizeCssAssetsPlugin(), // 压缩css文件
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: "./src/index.html",
      minify: {
        removeAttributeQuotes: true, //去除引号
        removeComments: true, //去除注释
        removeEmptyAttributes: true, //去除空属性
        collapseWhitespace: true //去除空格
      },
      favicon: './src/favicon.ico',
      hash: true,
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: "./src/404.html",
      minify: {
        removeAttributeQuotes: true, //去除引号
        removeComments: true, //去除注释
        removeEmptyAttributes: true, //去除空属性
        collapseWhitespace: true //去除空格
      },
      favicon: './src/favicon.ico',
      hash: true,
      chunks: ['404']
    })

  ],
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: { // 单独提取JS文件引入html
  //       aaa: { // 键值可以自定义
  //         chunks: 'initial', // 
  //         name: 'jquery', // 入口的entry的key
  //         enforce: true, // 强制
  //         test:/\.js/
  //       },
  //       bbb: { // 键值可以自定义
  //         chunks: 'initial', // 
  //         name: 'bootstrap', // 入口的entry的key
  //         enforce: true, // 强制
  //         test:/\.js/
  //       }
  //     }
  //   }
  // }
};