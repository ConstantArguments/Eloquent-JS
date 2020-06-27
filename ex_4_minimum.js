// Write a function min that takes two arguments and returns their minimum.
// Do not use Math.min().

function min(a, b) {
  if (a > b) return b;
  else return a;
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10




// book answer
function min(a, b) {
  if (a < b) return a;
  else return b;
}
