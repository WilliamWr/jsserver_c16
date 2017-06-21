// console.log('dom.js');

// this won't work unless
// <script> is at the bottom of body
// or
// you put it in a load event listener
// var body = document.body;
// console.log(body);

// obtrusive js requires global scope
// function onInputChangeHandler() {
//   console.log('change');
//   console.log(arguments);
// }


window.addEventListener("load", function() {
  // this function will run later (asynchronously)
  // when the document has "load"ed
  //console.log('the document has loaded');

  // var main = document.getElementById("main");
  // console.log(main);

  // this is also my "scope function"
  // I can safely create "private things" here
  //

  // grab the input from the DOM
  // var input = document.getElementById('our-text-input');

  // confirm that you got it correctly
  // console.log(input);

  // run this function when the input "change"s
  // input.addEventListener("change", function(evt) {
  //   console.log('something changed');
  //
  //   // the change event object
  //   // console.log(evt);
  //
  //   // the element that changed
  //   // var inputThatChanged = evt.target;
  //
  //   // you can also use "this" to refer to "the element that changed"
  //   // i.e. this === evt.target
  //   // i.e. var inputThatChanged = this;

  //   // make sure it works
  //   // console.dir(inputThatChanged);

  //   // grab the text from inside the inputThatChanged
  //   // var text = inputThatChanged.value;

  //   // make sure you got it
  //   // console.log(text);
  //

  //   // refactorings of the above code
  //   console.log(evt.target.value);
  //   console.log(this.value);
  // });

  // unobtrusive javascript
  var input = document.getElementById('our-text-input');
  input.addEventListener("change", function(evt) {
    // add behavior
  });
  // looks like CSS
  // input {
  //   // add styles
  // }

});
console.log('hello');
