// REFACTOR ES5 CODE TO ES6 (Enhanced Object Literals)
// ES5 code

/// part one
// var a = 1;
// var b = 2;
// var c = 3;

// var obj = {
//   a: a,
//   b: b,
//   c: c,
// };

// console.log(obj);

let a = 1;
let b = 2;
let c = 4;

const obj = { a, b, c };

console.log(obj);

// part two

// var lib = {
//   sum: function (a, b) {
//     return a + b;
//   },
//   mult: function (a, b) {
//     return a * b;
//   },
// };

// console.log(lib.sum(2, 3)); // 5
// console.log(lib.mult(2, 3)); //6

const lib = {
  sum: (a, b) => a + b,
  mult: (a, b) => a * b,
};

console.log(lib.sum(2, 3)); // 5
console.log(lib.mult(2, 3)); //6

// Part three

// function getPersonES5(name, age, height) {
//   return {
//     name: name,
//     age: age,
//     height: height,
//   };
// }

// getPersonES5("Joy", 15, 200);

function getPersonES6(name, age, height) {
  return { name, age, height };
}

const res = getPersonES6("Joy", 15, 200);
console.log(res);
