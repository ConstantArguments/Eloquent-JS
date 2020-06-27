/*
* Zero is even.

* One is odd.

* For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description.
The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75.
See how it behaves on -1. Why? Can you think of a way to fix this?
*/
function isEven (n) {
  function weedOut(n) {
    if (n < 0) {
      n = n * n; // fix for negatives
    } if (n == 0) {
      n = true;
      return n;
    } else if (n == 1) {
      n = false;
      return n;
    } else {
      n = (n - 2);
      return weedOut(n)
    }
  }
  return weedOut(n);
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false




// book answer
function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}
