const path=require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
       mode:'development',
    entry:'./src/login.ts',          
   devtool:'inline-source-map',
   plugins:[
        new HtmlWebpackPlugin({
            template:"./src/login.html"
        })
    ],
    module:
    {
        rules:[
            {
                test:/\.ts$/,
               use:'ts-loader',
               include:[path.resolve(__dirname,'src')]
                
            },
            {
                test:/\.css$/,
               use:[
                   "style-loader",
                    "css-loader"
               ]
            },
          
           
        ]
    },
    resolve:{
        extensions:['.ts','.tsx','.js']
       },
       devServer:{
           contentBase:'./dist'
       },
       output:{
        path:path.resolve(__dirname , 'dist'),
        filename:'bundle.js',
         publicPath: './',
    },
};




















    // plugins:[
    //     new HtmlWebpackPlugin()
    // ],
   
    
    
