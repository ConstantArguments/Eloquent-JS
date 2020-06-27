/*
Write two functions, reverseArray and reverseArrayInPlace.

The first, reverseArray, takes an array as argument
and produces a new array that has the same elements in the inverse order.

The second, reverseArrayInPlace, does what the reverse method does:
  it modifies the array given as argument by reversing its elements.
Neither may use the standard reverse method.
*/

function reverseArray(array) {
  let newArray = [];
  for (let value of array) {
    newArray.unshift(value); // // puts value at array position at front of newArray.
  }
  return newArray;
}

function reverseArrayInPlace(arrayValue) {
  //let stop = arrayValue.length;
  for (counter = 0; counter < arrayValue.length; counter++) {
    arrayValue.unshift(arrayValue[counter]); // puts value at array position to the front of array.
    arrayValue.splice((counter + 1), (1)); // deletes the duplicate "old" value at array position.
  }
  return arrayValue;
}
console.log(reverseArray(["A", "B", "C", 1, 2, 3]));
// → [3, 2, 1, "C", "B", "A"]
let arrayValue = [1, 3, 5, 7, 9, 11];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [11, 9, 7, 5, 3, 1]




// book answer
function reverseArray(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]