/**
 * Created by 周林 on 2017/2/22.
 */
var path =require("path");
var webpack =require("webpack");

module.exports ={
    entry:[
        'webpack-dev-server/client?http://0.0.0.0:8080',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname,"./app/main.js")],
    output:{
        path:path.resolve(__dirname,'./build'),
        filename:'bundle.js',
        publicPath:'http://localhost:8080/build/'
    },
    module:{
        loaders:[
            {test:/\.css$/,loaders:"style-loader!css-loader"},
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                loaders:["babel-loader"],

            }
        ]
    },
    resolve:{
        extensions:['.js','.json','.jsx']
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}
