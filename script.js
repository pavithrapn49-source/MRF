const { useReducer } = require("react")

                MAP

example

Multiply all the values in an array with 10:

const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}
 
             REDUCE 

example

Subtract all numbers in an array:

const numbers = [175, 50, 25];

document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}

                  FILTER

   example
Get all the values in an array that are larger than 18:

const numbers = [32, 33, 16, 40];
const result = numbers.filter(myFunction);

function myFunction(num) {
  return num > 18;
}