// 1. Writes a function draw(n)
// draw(n) takes in a number n, and prints the stars (*) into the console in this pattern:

// function draw(n) {
//   for (i = 1; i <= n; i++) {
//     let star = "";
//     for (j = 1; j <= n; j++) {
//       star = "*" + star;
//     }
//     console.log(star);
//   }
// }

// draw(5);

// // 2. Re-write drawNg(n) (-ng suffix is usually used for next-gen) Like draw(n), but this time drawNg(n) prints this pattern:

// function drawNg(n) {
//   let pattern = "";
//   for (i = 1; i <= n; i++) {
//     pattern = pattern + "*";
//     console.log(pattern);
//   }
// }

// drawNg(5);

// 3. Write a function maxNegMinPos(arr)
// maxNegMinPos(arr) takes in an array arr, and it prints the max negative value
// (maxNeg) as well as the min positive value (minPos)

// const arr = [12, -13, 14, 4, 2, -1, -18];

// let maxNegMinPos = (arr) => {
//   let numPos = [];
//   let numNeg = [];
//   for (i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] >= 0) {
//       numPos.push(arr[i]);
//     } else {
//       numNeg.push(arr[i]);
//     }
//   }
//   console.log(numPos);
//   console.log(numNeg);
//   console.log(Math.min(...numPos));
//   console.log(Math.max(...numNeg));
// };

// maxNegMinPos(arr);

// 5. Write a function mutual(arr1, arr2)

// mutual(arr1, arr2) returns a new array containing all mutual members of arr1 and arr2

const class1 = ["Alice", "Bob", "John", "Jane"];
const class2 = ["John", "Foobar", "Barbaz", "Foobaz", "Bob"];

let mutual = (arr1, arr2) => {
  let arr3 = [];
  for (let i = 0; i <= arr1.length - 1; i++) {
    for (let j = 0; j <= arr2.length - 1; j++) {
      if (arr1[i] === arr2[j]) {
        arr3.push(arr1[i]);
      }
    }
  }
  console.log(arr3);
  // return arr3;
};

mutual(class1, class2);

// console.log(mutual(class1, class2)); // ["John", "Bob"]

// 6. Write a fizzBuzz(n) function

// fizzBuzz(n) iterates over inclusive range [1, n], and for each element in the range, fizzBuzz(n) prints Fizz if the element is divisible by 3, Buzz if the element is divisible by 5, and FizzBuzz if the element is divisible by 3 and 5.

// If no conditions are met, fizzBuzz(n) prints the element.

// let fizzBuzz = (n) => {
//   let a = 1;
//   for (let i = 1; i <= n; i++) {
//     if (a % 3 === 0 && a % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (a % 3 === 0) {
//       console.log("Fizz");
//     } else if (a % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(a);
//     }
//     a = a + 1;
//   }
// };

// fizzBuzz(20);

// 12. Write a function filterLt(n, arr)

// filterLt(n, arr) takes in an a number n and an array of numbers arr, and returns a new array containing all elements of arr that is lesser than (lt) n.

// const arr = [120, 112, 111, 130, 169, 101];

// const filterLt = (val, arr) => {
//   let resultLt = [];
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (val > arr[i]) {
//       resultLt.push(arr[i]);
//     }
//   }
//   console.log(resultLt);
// };

// filterLt(0, arr); // []
// filterLt(112, arr); // [111, 101]

// 13. Write a function filterGt(n, arr)

// filterGt(n, arr) performs similar business logic to filterLt(n, arr) above, but instead of doing a lesser-than test, it does a greater-than test

// const arr = [120, 112, 111, 130, 169, 101];

// const filterGt = (val, arr) => {
//   let resultGt = [];
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (val < arr[i]) {
//       resultGt.push(arr[i]);
//     }
//   }
//   console.log(resultGt);
// };

// filterGt(0, arr); // [120, 112, 111, 130, 169, 101]
// filterGt(112, arr); // [120, 130, 169]

// 16. Write a function mean(arr)

// mean(arr) returns the mean average value of arr dataset (represented as an array).

// If any one of arr members are of non-number type, mean(arr) returns null

// const mean = (arr) => {
//   let numSum = 0;
//   for (i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] === Number.NaN) {
//       return null;
//     } else {
//       numSum = numSum + arr[i];
//     }
//   }
//   let meanSum = numSum / arr.length;
//   console.log(meanSum);
// };

// mean([1, 2, 3]); // 2
// mean([1, "foo", 3]); // null

// 28. Write a function transpose(bits, w, h)

// transpose(bits, w, h) transposes an array bits into arrays of arrays, based on the value of w, h, and to some extent bits.

// For example, consider this scenario: we are working on a image processing engine.

// The image files are represented on disks or in memory as just a long list (array) of bytes, much like any files:

// How files are represented on disk as arrays of bits,
// and when they are first loaded to memory.
// [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0];

// const imageBytes = [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1];

// const transpose = (bits, w, h) => {
//   idx = 0;
//   for (j = 1; j <= h; j++) {
//     let pixel = [];
//     for (let i = 1; i <= w; i++) {
//       pixel.push(bits[idx]);
//       idx = idx + 1;
//     }
//     console.log(pixel);
//   }
// };

// transpose(imageBytes, 8, 2);
// transpose(imageBytes, 2, 8);

// 29. Write a function transposable(arr, w, h)

// Related to transpose(arr, w, h) above

// transposable(arr, w, h) returns a boolean, indicating whether the array arr could be transposed with w and h.

// An array would be transpose with w and h if the transposed arrays all contains the same length, that is, they can form a rectangle.

// You are allowed to use gcd(a, b) from above.

// const image = [1, 0, 1, 0, 1, 1]; // len = 6

// const transposable = (arr, w, h) => {
//   if (arr.length / (w * h) === 1) {
//     console.log("True");
//   } else {
//     console.log("False");
//   }
// };

// transposable(image, 2, 3); // true
// transposable(image, 6, 1); // true
// transposable(image, 4, 2); // false

// const image = [1, 0, 1, 0, 1, 1]; // len = 6

// const transposable = (arr, w, h) => {
//   const x = arr.length / w;
//   if (x % h === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(transposable(image, 2, 3)); // true
// console.log(transposable(image, 6, 1)); // true
// console.log(transposable(image, 4, 2)); // false

// filterGtNeg(-20, [-1,-2, 2, 3, -100]) -100

// const filterGtNeg = (val, arr) => {

// }
