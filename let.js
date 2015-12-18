'use strict';
// 例子1
// {
//   let a = 10;
//   var b = 1;
// }
// console.log(b);// 1
// console.log(a);// ReferenceError: a is not defined.


// 例子2
// for(let i = 0; i < 3; i++){
// 	console.log(i);// 0,1,2
// }
// console.log(i);// ReferenceError: i is not defined.


// 例子3
// var a = [];
// for (var i = 0; i < 10; i++) {
//   a[i] = function () {
//     console.log(i);
//   };
// }
// a[6](); // 10

// var a = [];
// for (let i = 0; i < 10; i++) {
//   a[i] = function () {
//     console.log(i);
//   };
// }
// a[6](); // 6

// 例子4，不存在变量升级
// console.log(foo); // ReferenceError
// let foo = 2;

// console.log(foo); // undefined
// var foo = 2;
