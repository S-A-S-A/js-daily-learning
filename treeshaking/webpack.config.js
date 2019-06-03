const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const glob = require('glob-all');
const PurifyCSSPlugin = require('purifycss-webpack');
module.exports={
    module:{
      rules:[
          {
              test:/\.css$/,
              use:[MiniCssExtractPlugin.loader,'css-loader']
          }
      ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            // chunkFilename: '[id].css',
        }),
        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute!
            paths: glob.sync([
                path.join(__dirname, './*.html'),
                path.join(__dirname, './src/*.js'),
            ]),//'./*.html'表示匹配，根目录下的所有以HTML为结尾的文件
        }),
        new WebpackDeepScopeAnalysisPlugin(),
        
      ],
}