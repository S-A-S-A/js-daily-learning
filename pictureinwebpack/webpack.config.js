var path=require('path');
let {CleanWebpackPlugin}=require('clean-webpack-plugin');
var HtmlWebpack=require('html-webpack-plugin');
var Webpack=require('webpack');
module.exports={
    entry:{
        index:'./index.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name][hash:5].bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    
                        {loader:'style-loader'},
                        {loader:'css-loader'}
                    
                ]
            },
            {
                test:/\.(jpg|png|jpeg|gif)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            name:'[name][hash:5].[ext]',
                            limit:100,//限制图片大小，<=100kb,进行base64编码
                            outputPath:'img'
                        }
                    },
                    //图片解析
                    {
                        loader:'img-loader',
                        options:{
                            plugins:[
                                require('imagemin-pngquant')({
                                  quality:[0.3,0.5]//规定压缩质量,0到1之间，最少压缩0.3级别，最优压缩至0.5级别
                                  }),
                            ]
                            
                        }
                    },
                ]
            },
             //图片压缩
             {
                test:/\.html$/,
                use:[
                    {
                        loader:'html-loader',//用html-loader处理
                        options:{
                            attrs:['img:src']//处理html中引入的和图片有关的内容，img标签中的src属性
                        }
                    }

                ]
            }
        ]
    },
    mode:'development',
    plugins:[
        // new CleanWebpackPlugin(),
        new HtmlWebpack({
            template:'./index.html'
        }),
        new Webpack.HotModuleReplacementPlugin()     //引入支持热更新的插件
    ],
    //解决同时开启两个服务器，8080端口冲突的问题
    devServer:{
        port:'9091'  ,//改变端口
        contentBase:'dist',//默认打开路径
        hot:true//开启热更新
    }
}