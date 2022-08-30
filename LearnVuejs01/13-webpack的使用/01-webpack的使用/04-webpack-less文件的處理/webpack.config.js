const path = require('path')


module.exports = {
    entry: './src/main.js',  // 表示入口
    output: {  // 表示出口
        // 動態獲取路徑
        path: path.resolve(__dirname, 'dist'), // 路徑，必須是絕對路徑
        filename: 'bundle.js' // 檔案名稱
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // 使用多個 loader 時，順序是從右向左。
                // 我們必須先解析 css 之後才可以將樣式添加到 DOM 中。
                use: ['style-loader', 'css-loader']
            },
            {
                // 我們現在沒有其他更多的選項，所以也可以使用上面數組的形式。
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            }
        ]
    }
}