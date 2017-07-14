'use strict';

/*
*Pick a random student from class
*
*store names in a variable - array
*
*generate a random number, 0 - less than # of students
*
*apply the index to the array
*
*from that array, pick a random name
*
*return a name
*/

const classarray = ['Cam', 'Ryan', 'Ty', 'Craig', 'Trevor'];

function randomNumberInRange(min,max) {
  return Math.floor( Math.random() * ( 1 + max - min)) + bottom;
}

function generateRandomName(min,max){
  const index = randomNumberInRange(classArray.length -1, 0);
  return studentArray[index];
}

console.log(generateRandomName());
