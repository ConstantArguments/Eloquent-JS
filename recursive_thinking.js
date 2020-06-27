/*
The inner function find does the actual recursing.
It takes two arguments: the current number and a string that records how we reached this number.
If it finds a solution, it returns a string that shows how to get to the target.
If no solution can be found starting from this number, it returns null.

To do this, the function performs one of three actions.
  If the current number is the target number,
    the current history is a way to reach that target, so it is returned.
  If the current number is greater than the target,
    there’s no sense in further exploring this branch because both adding and multiplying
    will only make the number bigger, so it returns null.
  Finally, if we’re still below the target number,
    the function tries both possible paths that start from the current number by calling itself twice,
    once for addition and once for multiplication.
    If the first call returns something that is not null, it is returned.
    Otherwise, the second call is returned, regardless of whether it produces a string or null.


*/

function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      // The || operator will return the value to its left when that can be converted to true
      // and will return the value on its right otherwise.
      return find(current + 5, `(${history} + 5)`) ||
             find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}

console.log(findSolution(13));
// → (((1 * 3) + 5) + 5)


/*
To better understand how this function produces the effect we’re looking for,
let’s look at all the calls to find that are made when searching for a solution for the number 13.

find(1, "1")
  find(6, "(1 + 5)")
    find(11, "((1 + 5) + 5)")
      find(16, "(((1 + 5) + 5) + 5)")
        too big
      find(33, "(((1 + 5) + 5) * 3)")
        too big
    find(18, "((1 + 5) * 3)")
      too big
  find(3, "(1 * 3)")
    find(8, "((1 * 3) + 5)")
      find(13, "(((1 * 3) + 5) + 5)")
        found!

*/