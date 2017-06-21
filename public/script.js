// console.log("Hello JS file");

// this is a comment
// console.log("Hello")

/**
  * this is a multi-line comment
  * it keeps going until it sees
  * the star-slash
  **/
// console.log("hello");

////
// if / else
////
// var input = true;
// if (input) {
//   console.log("it's true");
// } else {
//   console.log("it's false");
// }
//
// // check if some variable is defined
// var input; // input = undefined
// // watchout for falsey things: null, 0, "", false
// if (input) {
//   console.log("it's defined");
// } else {
//   console.log("it's undefined");
// }

////
// ternary statements
////

// var input = false
// var output = input ? "True" : "False"
// console.log(output)

////
// stacked if/else
////
//
// var value = 0;
// if (value === 0) {
//   console.log('zero');
// } else if (value === 1) {
//   console.log('one');
// } else {
//   console.log('something else');
// }
//
// // JS Eich trick
// // if (value === 0) {
// //   console.log('zero');
// // } else {
// //   if (value === 1) {
// //     console.log('one');
// //   } else {
// //     console.log('something else');
// //   }
// // }
//
// if (value === 0) console.log('zero');
// if (value === 1)
//   console.log('one');

////
// switch/case
////

// let value = 4;
// switch (value) {          // Ruby: case
//   case 0:                 // Ruby: when
//     console.log('zero');
//     break;    // fall-through break
//   case 1:
//     console.log('one');
//     break;
//   case 2:
//   case 3:
//     console.log("two or three"); // this will run if value === 2 || value === 3
//     break;
//   default:
//     console.log('something else');
//     // break;
// }

////
// while loop
////
// var x = 0;        // starting point
// while (x <= 10) { // ending point
//   console.log(x);
//   x++;            // step size
//   // x += 2;
// }

////
// while loop + if statement + break
////

// var a = 0;
// while (true) {
//   console.log(a);
//   if (a >= 10) {
//     break;
//   } else {
//     a++;
//   }
// }

////
// for loops
////
// for (var i = 0; i <= 10; i++) {
//   console.log(i);
// }

// var i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

////
// for loops, forEach loops and arrays
////
// var arr = ["a", "b", "c", "d"];
// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
//
// // var i = 0;
// // while (i < arr.length) {
// //   console.log(arr[i]);
// //   i++;
// // }
//
// arr.forEach(function(item) {
//   console.log(item);
// });

////
// JavaScript function statements
////
// function wyncode() {
//   console.log('wyncode');
// }
// wyncode();
//
// function wyncode2(word) {
//   console.log(word);
// }
// wyncode2("Hello");

////
// function expressions
////
// function hello() {
//   console.log('hello');
// }
// // console.log(hello.name);
// // console.log("hello");
// // console.log(1);
// // console.log({a: 1});
// var a = hello;
// console.log(a.name);

// function expression
// functionVariable = function() {
//   console.log('hello');
// }
// // functionVariable();
// // console.log(functionVariable);
//
// console.log("hello".toUpperCase());
// console.log([1,2,3].length);
// console.log(functionVariable());
// console.log((function() { console.log('hello'); })() );
//
// function stmt() {
//   console.log('statement');
// }
// expr = function() { console.log("expression"); }
//
// stmt();
// expr();
//
// // a = "hello"
// function myFunction(arg) {
//   console.log(arg);
// }
// // myFunction(a);
// myFunction(expr);
// myFunction(function() { console.log("expression"); });
//
// [1,2,3].forEach(function(item) {
//   console.log(item);
// });


////
// function return
////
//
// // function one() {
// //   console.log("the function still runs");
// //   // 1; // there is no implied return
// //   return 1;
// // }
// // console.log(one());
//
// function empty() {}
// console.log(empty());

////
// function arguments
////

// function addTwo(num) {
//   // num = arguments[0];
//
//   // console.log(num);
//   console.log(arguments);
//   return(num + 2);
// }
// // console.log(addTwo(0));
// // console.log(addTwo(0.6));
// // console.log(addTwo("hello"));
// console.log(addTwo()); // there is no such thing as too few arguments in JS
// // console.log(addTwo(0, 1, 2, 3, "hello", {})) // there is no such as too many arguments in JS

////
// function arguments
////
//
// function addAll() {
//   // console.log(arguments);
//   var sum = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     var num = arguments[i];
//     sum = sum + num; // sum += num
//   }
//   // console.log(sum);
//   return sum;
// }
//
// // addAll();
// // addAll(1);
// var sum = addAll(1, 2, 3);
// console.log(sum);
//
// console.log("hello", "world", 2, [], {});

////
// default arguments
////

function addTwo(num) {
  // the default value of num is 0
  if (typeof(num) === "undefined") {
    num = 0;
  }
  return num + 2;
}
console.log(addTwo(1), addTwo())
console.log('this is working');
