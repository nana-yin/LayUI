const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")// 在dist目录下生成新的index.html文件
const { CleanWebpackPlugin } = require("clean-webpack-plugin") // 生成文件前清理dist目录下的所有文件
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  devServer: {
    open: true,
    host: "localhost",
    port: 9527
  },
  entry: './src/index.js', // 入口文件
  output: {
    path: path.resolve(__dirname, 'dist'), // 出口目录
    // filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js','json'], // 文件的后缀名可以省略
    alias: { // 表示别名
      '@': path.join(__dirname, './src')
    }
  },
  plugins: [ // 插件管理
    new CleanWebpackPlugin(), // 生成文件前清理dist目录下的所有文件
    new HtmlWebpackPlugin({ // 在dist目录下生成新的index.html文件
        template: "./index.html",
        minify: {
            // 压缩html
            collapseWhitespace: true, // 压缩空白
            removeComments: true // 去除注释
        }
    }),
    new webpack.ProvidePlugin({}), // 自动加载模块
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src'),
        to: 'src',
      }
    ])
  ],
  module: {
    rules: [
      {
        test:/\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  target: ["web", "es5"] // combining targets
}