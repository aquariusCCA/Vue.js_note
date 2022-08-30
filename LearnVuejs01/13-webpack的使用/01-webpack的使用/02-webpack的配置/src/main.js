// 1. 使用 CommonJS 模塊化規範導入
const {add, mul} = require('./mathUtils.js')

console.log(add(20, 30));
console.log(mul(20, 30));


// 2. 使用 ES6 的模塊化的規範導出
import { name, age, height } from './info.js';
console.log(name);
console.log(age);
console.log(height);