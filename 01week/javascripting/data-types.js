'use strict'
/* Write a JavaScript program to display the current day and time.
*/
function returnDate() {
  const date = new Date();
  return date;
}
console.log(returnDate());

function numToString() {
  const num = 9;
  const str = num.toString();
  return str;
}
console.log(numToString());


/*Write a JavaScript program to convert a string to the number.
*/
function stringToNum() {
  const num = parseInt("10");
  return num;
}
console.log(stringToNum());


/*Write a JavaScript program that takes in different datatypes and prints out whether they are a:
* Boolean
* Null
* Undefined
* Number
* NaN
* String
*/
function typeOf(arg) {
  return typeof arg;
};
console.log(typeOf(true)); /* Boolean */
console.log(typeOf("")); /* Null */
console.log(typeOf()); /* Undefined */
console.log(typeOf(9)); /* Number */
console.log(typeOf(NaN)); /* NaN */
console.log(typeOf("Thank you for teaching us!")); /* String */




/*Write a JavaScript program that adds 2 numbers together.
*/
function addTogether(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log(addTogether(7, 9));


/*Write a JavaScript program that runs only when 2 things are true.
*/
function bothAreTrue() {
  let num1 = 9;
  let num2 = 17;
  if(num1 >= 9 && num2 < 20) {
    return("These are both true!");
  }
}
console.log(bothAreTrue());


/*Write a JavaScript program that runs when 1 of 2 things are true.
*/
function oneIsTrue() {
  let num1 = 55;
  let num2 = 108;
  if(num1 > num2 || num2 > num1) {
    return ("It's anyone's guess which one is true!");
  }
}
console.log(oneIsTrue());
/*Write a JavaScript program that runs when both things are not true.
*/
function bothAreFalse() {
  const num1 = 1082;
  const num2 = 47193;
  if(num1 > num2 && num2 < num1) {
    return ("Everything is true!");
  } else {
    return ("Nothing is true!");
  }
}
console.log(bothAreFalse());
