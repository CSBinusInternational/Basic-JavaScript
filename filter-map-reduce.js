const arr = [1, 2, 3, 4, 5];

const filterArr = arr.filter((a) => a % 2 === 0); // new array only contain even numbers
console.log(filterArr);

const mapArr = arr.map((a) => a % 2 === 0); // this will return true or false
console.log(mapArr);

const mapSquaredArr = arr.map((a) => a * a); // this returns the squared of the array
console.log(mapSquaredArr);

// get all even numbers, square them, and lastly sum all of them
const sumEven = arr
  .filter((a) => a % 2 === 0)
  .map((a) => a * a)
  .reduce((a, b) => a + b);
console.log(sumEven);
