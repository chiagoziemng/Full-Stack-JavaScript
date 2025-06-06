// Create a function name (showCallFunc)
//pass "fn" as parameter
// inside that function, create variable which holds value of 10
// pass that value to the callback function
// Now create callback function & print that value which you pass as parameter to the callback function.

function showCallFunc(fn) {
  const value = 10;
  fn(value);
}

showCallFunc(function (value) {
  console.log(value);
});
