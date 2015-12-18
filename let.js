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

// typeof x; // ReferenceError
// let x;


// 例子5，暂时性死区
// var tmp = 123;
// // if(true){
// // 	tmp = 'abc';// ReferenceError
// // 	let tmp;
// // }

// if (true) {
//   // TDZ开始
//   // tmp = 'abc'; // ReferenceError
//   // console.log(tmp); // ReferenceError

//   let tmp; // TDZ结束
//   console.log(tmp); // undefined

//   tmp = 123;
//   console.log(tmp); // 123
// }

// 例子6，不允许重复声明一个变量
// 报错
// function k() {
//   let a = 10;
//   var a = 1;
// }
// 报错
// function k() {
//   let a = 10;
//   let a = 1;
// }

// 例子7
// function func(arg) {
//   let arg; // 报错
// }

// function func(arg) {
//   {
//     let arg; // 不报错
//   }
// }

// 为什么需要块级作用域？
// 场景1：内层变量可能会覆盖外层变量(变量升级导致的覆盖)
var tmp = new Date();

function f(){
  console.log(tmp);
  if (false){
    var tmp = "hello world";
  }
}

f() // undefined