// var a, b, c;
// var x, y, z, a, arr, test, something;

// console.log('weird');

////
// JavaScript "blocks"
////
//
// // 5.times do
// //   puts "hello"
// // end
// // 5.times { puts "hello" }
//
// function times(number, block) {
//   // console.log(block());
//   for (var i = 0; i < number; i++) {
//     // console.log("times");
//     block();
//   }
// }
// // var sayHello = function() {
// //   console.log("hello");
// // }
// // times(5, sayHello);
// times(5, function() { console.log("hello"); });

////
// sameness (aka equality is broken)
////
// console.log(0 == false);
// console.log("" == false);
// console.log(1 + "hello");
//
// console.log(0 === false);
// console.log("" === false);

// console.log(NaN == NaN);
// console.log(NaN === NaN);
//
// function addTwo(num) {
//   // num is a number, and is "not a number"?
//   // if (typeof(num) === "number" && isNaN(num)) {
//
//   if (Object.is(num, NaN)) {
//     console.log("found NaN!");
//     num = 0;
//   }
//   return num + 2;
// }
// console.log(addTwo(NaN), addTwo("hello"));

////
// everything is a hash (i mean "object literal")
////
//
// var a = [1,2,3];
// // console.log(a);
// // console.dir(a);
// a["x"] = "something";
//
// // iterating over an array
// for (var i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }
//
// console.log(a);
//
// // iterating over an "object literal"
// for (var key in a) {
//   console.log(key, a[key]);
// }
//
// var obj = {a: 1, b: 2, 0: true, whatever: "whatever"};
// for (var key in obj) {
//   console.log(key, obj[key]);
// }

////
// hoisting
////

// console.log(x);
// var x = 1;

// a = 1;
// // ...
// b = 2;
// //...
// c = 3;

// memba berries in Ruby
// tip = 20
// total = 40
// num_people = 3

// algorithm...

// output...

////
// scope
////

// global scope
var h = "Hello";
// h = "hello";
function sayHello() { console.log('hello'); }

// function scoped variable
function scopeFunction() {
  var scoped = "scoped variable";
}
scopeFunction();
// console.log(scoped);

// console.log(x);

// hoisting goes to the top of the current scope
// functions have their own scope
// function hello() {
//   var x; // function variables are hoisted to the top of the function
//   console.log(x);
//   // console.log(window.s);
//
//   // var x = 1; // where does this get hoisted?
//   x = 1;
//   console.log('hello');
// }
// hello();
// // console.log(x);
//
// var s;
// s = "wyncode";
