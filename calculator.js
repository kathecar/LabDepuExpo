const add = function(a, b) {
    return a + b;
}
const subtract = function(a, b) {
  return a - b;
}

function divide(a, b, c) {
  if (b === 0) {
      return ("No se puede dividir");
  }
  if (!c) {
      return a / b;
  } else {
      return (a / b) / c;
  }


}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw?utm_source

function multiply(a, b, c) {
  if (!c) {
    return a * b;
  } else {
    return a * b * c;
  }
}
// When you want to use the divide or multiple function, remember to add it to the export here
module.exports = {add: add, subtract: subtract, divide, multiply};