// adds padding of zero(s) before a number.

function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}
console.log(zeroPad(123, 6));
// -> 000123


// use:
function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(7, 16, 3);
//->
/*
007 Cows
016 Chickens
003 Pigs
*/


// The zeroPad function also exists as a method.
// It is called padStart and takes the desired length and padding character as arguments.

console.log(String(6).padStart(3, "0"));
// → 006