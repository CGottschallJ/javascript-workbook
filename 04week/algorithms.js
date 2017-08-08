'use strict';

const assert = require('assert');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let arr = [];

for (let i = 0; i < 1000; i++) {
  arr.push(getRandomInt(0, 1000));
}

  //Setting up a loop to run through the array
  //If the current number is larger than the current number +1 then swap them.
  //Swap them by setting i to a variable then...
  //Set arr[i] to the value of i + 1
  //Set the value of arr[i+1] to the variable created at the beginning

function bubbleSort(arr) {
let flip = false;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > arr[i + 1]) {
      flip = true;
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  if(flip) {
    return bubbleSort(arr);
  }
  return arr;
}


//console.log(arr);
//console.log(bubbleSort(arr));
// print the array
//cut the array in half with math.floor so that it rounds down.
//set the values of the two sides with .length
//while the left side and right side are greater than 0.
//// if the left side is greater, push that to the result and itterate to the next
//// if the right side is greater, push that to the result and itterate to the next
// finally, concat the two sides back together

function mergeSort(arr) {
  let length = arr.length;
  if(length < 2) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  let result = [];
    let leftLength = left.length;
    let rightLength = right.length;
    let leftStart = 0;
    let rightStart = 0;
  while(leftStart < leftLength && rightStart < rightLength) {
    if(left[leftStart] < right[rightStart]) {
      result.push(left[leftStart++]);
    }
    else {
      result.push(right[rightStart++]);
    }
  }
  return result.concat(left.slice(leftStart)).concat(right.slice(rightStart));
}

//console.log(arr);
//console.log(mergeSort(arr));


/*
Assume that we are given a sorted array and a value to search for.

For the search...
locate the middle index of the array
compare the value if that index to the search value
if it is correct
  return correct
if the search value is > middle value
  create sub array [middle value+1 , end]
  return binarySearch[sub array]
else if search value is < middle value
  create a sub array [beginning, middle -1 ]
  return binarySearch[sub array]
if the value is not in the array
  return did not find in array
*/

function binarySearch(dataArr, item start = 0, end = dataArr.length-1) {
  let middle = Math.floor(start + (end - start) / 2);
  if(item === dataArr[middle]) return middle;
  else if(item < dataArr[middle]) return binarySearch(dataArr, item, start, middle-1);
  else if(item > dataArr[middle]) return binarySearch(dataArr, item, middle + 1, end);
  return -1;
}
console.log(dataArr);
console.log(binarySearch(dataArr));


// Tests

if (typeof describe === 'function') {

  function comparator(a, b) {
    if (Number(a) < Number(b)) return -1;
    if (Number(a) > Number(b)) return 1;
    return 0;
  }

  describe('#bubbleSort()', () => {
    it('should sort array', () => {
      const sorted = bubbleSort(arr);
      assert.deepEqual(sorted, arr.sort(comparator));
    });
  });

  describe('#mergeSort()', () => {
    it('should sort array', () => {
      const sorted = mergeSort(arr);
      assert.deepEqual(sorted, arr.sort(comparator));
    });
  });

  describe('#binarySearch()', () => {
    it('should return the index of given item if sorted array contains it', () => {
      const idx = binarySearch([1, 2, 3, 4], 3);
      assert.equal(idx, 2);
    });
    it('should return false if item not in sorted array', () => {
      const idx = binarySearch([1, 2, 3, 4], 5);
      assert.equal(idx, false);
    });
  });

} else {

  console.log('Run the tests!')

}
