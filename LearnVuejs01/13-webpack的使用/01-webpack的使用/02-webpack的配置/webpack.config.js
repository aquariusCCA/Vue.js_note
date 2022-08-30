const path = require('path')


module.exports = {
    entry: './src/main.js',  // 表示入口
    output: {  // 表示出口
        // 動態獲取路徑
        path: path.resolve(__dirname, 'dist'), // 路徑，必須是絕對路徑
        filename: 'bundle.js' // 檔案名稱
    } 
}