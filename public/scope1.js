console.log('scope1');

// anything with a name can be overriden
// var scopeFunction = function() {}

// scope function
(function() {
  var hoist;

  var myOwnVariable = "my really private variable";
  console.log(myOwnVariable);

  var myOwnFunction = function() {
    console.log("private function");
  }
  myOwnFunction();

  // var hoist = "hoist";
  hoist = "hoist";
})();
