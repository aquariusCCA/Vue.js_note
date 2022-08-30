// main.js 文件作為入口，放在最外層是比較合適的。

// 1. 使用 CommonJS 模塊化規範導入
const {add, mul} = require('./js/mathUtils.js')

console.log(add(20, 30));
console.log(mul(20, 30));


// 2. 使用 ES6 的模塊化的規範導入
import { name, age, height } from './js/info.js';
console.log(name);
console.log(age);
console.log(height);


// 3. 依賴 css 文件
require('./css/normal.css')