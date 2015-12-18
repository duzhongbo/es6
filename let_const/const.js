'use strict';

// 例子1
// const PI = 3.1415;
// // console.log(PI);// 3.1415


// PI = 3;// 报错

// 例子2
// const foo;// 报错
// const foo=1;


// 例子3
// if (true) {
//   const MAX = 5;
//   console.log(MAX);
// }

// console.log(MAX);


// 例子4，对于复合类型的变量，变量名不指向数据，而是指向数据所在的地址。const命令只是保证变量名指向的地址不变，并不保证该地址的数据不变
// const foo = {};
// foo.prop = 123;

// console.log(foo.prop);

// foo = {} // 报错

// 例子5
// const a = [];
// a.push("Hello"); // 可执行
// a.length = 0;    // 可执行
// a = ["Dave"];    // 报错

// 例子6，对象冻结
// const foo = Object.freeze({});
// // foo.prop = 123; // 报错
// console.log(foo.constructor);// 对象属性仍可访问，未冻结

// 例子7，对象彻底冻结，包括属性
var constantize = (obj) => {
  Object.freeze(obj);
  Object.keys(obj).forEach( (key, value) => {
    if ( typeof obj[key] === 'object' ) {
      constantize( obj[key] );
    }
  });
};

