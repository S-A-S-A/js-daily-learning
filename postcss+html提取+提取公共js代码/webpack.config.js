var path=require('path');
var MiniCssExtractPlugin=require('mini-css-extract-plugin');
var HtmlWebpackPlugin=require('html-webpack-plugin');
let {CleanWebpackPlugin}=require('clean-webpack-plugin');
module.exports={
    entry:{
        // index:'./index.js'
        pageA:'./src/pageA.js',
        pageB:'./src/pageB.js',
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"[name][hash:5].bundle.js",
        chunkFilename:'[name][hash:5].js'
    },
    optimization:{
        splitChunks:{
             cacheGroups:{
                 common:{
                     name:'common', //新生成代码的名字
                     chunks:'all', //在哪些js范围内寻找这些公共模块
                     minSize:1,    //包能被抽离出来的最小体积
                     minChunks:2,    //公共代码出现的最少的次数
                     priority:1  //设置优先级
                    },
                 vendor:{
                    name:'vendor', //新生成代码的名字
                   test:/[\\/]node_modules[\\/]/,
                   priority:10,
                   chunks:'all'
                }
             }
           }
    },
    module:{
       rules:[
           {
            test:/\.less$/,
            // use:[
            //     {
            //         loader:MiniCssExtractPlugin.loader
            //     },
            // //    {loader:'style-loader'},
            //    {
            //        loader:'css-loader'
            //     }
            // ]
            use:[
                {
                    loader:MiniCssExtractPlugin.loader
                },
                {
                    loader:'css-loader'
                },
                {
                    loader:'postcss-loader',
                    options:{
                        ident:'postcss',
                        plugins:[
                            require('postcss-cssnext')(),
                            // require('autoprefixer')(),
                            require('cssnano')()
                        ]
                    }
                },
                {
                    loader:'less-loader'
                }
            ],
           }
       ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'[name][hash:5].css'
        }),
        new HtmlWebpackPlugin({
            title:'123',
            filename:'index.html',
            template:'./index.html',//生成新的html的模板
            minify:{
                //清理注释
                removeComments:true,
                //清理空白
                collapseWhitespace:true
            }
        }),
        new CleanWebpackPlugin()
    ],
    mode:'development'
}