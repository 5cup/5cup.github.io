// JavaScript 数据类型

// 基本数据类型

// 1. Number 数字类型
// 2. String 字符串类型
// 3. Boolean 布尔类型
// 4. Undefined 未定义
// 5. Null 空值
// 6. Symbol 符号类型
// 7. BigInt 大整数类型

// 引用数据类型

// 1. Object 对象类型
// 2. Array 数组类型
// 3. Function 函数类型
// 4. 其他内置对象
// 4.1 Date 日期类型
// 4.2 RegExp 正则表达式类型
// 4.3 Math 数学类型
// 4.4 JSON JSON类型
// 4.5 Error 错误类型
// 4.6 Global 全局对象类型
// 4.7 Promise 异步编程对象类型
// 4.8 Proxy 代理对象类型
// 4.9 Reflect 反射对象类型
// 4.10 Set 集合对象类型
// 4.11 Map 映射对象类型

// console.log(typeof 123); // number/

var patt = /[0-9a-zA-Z]/;
console.log(patt.test("abdfhcdefg"));
console.log(patt.test("1234567"));
console.log(patt.test("ABCDEFG"));
console.log(patt.test("+_)*^$%"));
console.log(patt.test("?><,.>()"));
