'use strict';

// 解构1

// var [a, b, c] = [1, 2, 3];
// console.log(a,b,c);

// 解构2

// let [foo, [[bar], baz]] = [1, [[2], 3]];
// console.log(foo);// 1
// console.log(bar);// 2
// console.log(baz);// 3


// 解构3
// let [ , , third] = ["foo", "bar", "baz"];
// console.log(third);

// 解构4
// let [x, , y] = [1, 2, 3];
// console.log(x,y);

// 解构5
// let [head, ...tail] = [1, 2, 3, 4];
// console.log(head,tail);

// 解构6
// let [x, y, ...z] = ['a'];
// console.log(x,y,z);

// 默认值
// var [foo = true] = [];
// console.log(foo);

// 默认值1
// var [x, y = 'b'] = ['a'] // x='a', y='b'
// console.log(x,y);

// 默认值2
var [x = 1] = [undefined];
console.log(x);







