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

// 4. Write a function fib(n)

// fib(n)returns the nth element of a fibonacci series.

// The series look like this:

// 1, 2, 3, 5, 8, 13, 21, ...

// const fib = (n) => {
//   let a = 1;
//   let result = 0;
//   for (let i = 1; i <= n; i++) {
//     result = a + result;
//   }
//   console.log(result);
// };

// const fib = (n) => {
//   if (n === 1) {
//     return 1;
//   }

//   let a = 1;
//   let b = 2;

//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// };

// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(4));

// 5. Write a function mutual(arr1, arr2)

// mutual(arr1, arr2) returns a new array containing all mutual members of arr1 and arr2

// const class1 = ["Alice", "Bob", "John", "Jane"];
// const class2 = ["John", "Foobar", "Barbaz", "Foobaz", "Bob"];

// let mutual = (arr1, arr2) => {
//   let arr3 = [];
//   for (let i = 0; i <= arr1.length - 1; i++) {
//     for (let j = 0; j <= arr2.length - 1; j++) {
//       if (arr1[i] === arr2[j]) {
//         arr3.push(arr1[i]);
//       }
//     }
//   }
//   console.log(arr3);
//   // return arr3;
// };

// mutual(class1, class2);

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

// 8. Try learning Array.sort method (function) with this snippet:

// const arr = [3, 2, 1, 12, 13, 11];

// const sort = (n) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (n[j] > n[j + 1]) {
//         let temp = n[j];
//         n[j] = n[j + 1];
//         n[j + 1] = temp;
//       }
//     }
//   }
//   return n;
// };

// console.log(sort(arr)); // [1, 11, 12, 13, 2, 3]

// 9. Write a function prime(n)

// prime(n) returns an array of first n prime numbers

// const prime = (n) => {
//   result = []
//   for (i=1; i <=n; i++){
//     if (i% === 0 && ) {
//       result.push(i)
//     }
//   }
// }

// const prime = (n) => {
//   if (n < 1) return false;

//   // Initialize our answers with 2
//   const primes = [2];

//   for (let i = 3; primes.length < n; i++) {
//     // Assume i is prime number
//     // until we can prove otherwise
//     let isPrime = true;

//     for (let j = 0; j < primes.length; j++) {
//       const p = primes[j];
//       // i is divisible by p, discard i
//       if (i % p === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     console.log(i);
//     console.log(isPrime);
//     if (isPrime) primes.push(i);
//   }

//   return primes;
// };

// prime(6);
// console.log(prime(6));

// const prime = (n) => {
//   if (n < 1) {
//     return false;
//   }

//   primes = [2];

//   if (n === 1) {
//     return primes;
//   }

//   for (i = 3; primes.length < n; i++) {
//     let isPrime = true;
//     for (j = 0; j < primes.length; j++) {
//       const p = primes[j];
//       if (i % p === 0) {
//         isPrime = false;
//         break;
//       }
//     }

//     if (isPrime) {
//       primes.push(i);
//     }
//   }

//   return primes;
// };

// console.log(prime(6));
// prime(4); // [2, 3, 5, 7]
// prime(5); // [2, 3, 5, 7, 11]

// 10. Write a function drawDown(chart)

// drawDown(chart) returns the biggest downward movement within the chart points

// Where chart is points in a chart, represented as an array of numbers: [110, 105, 95, 9, 80, 17, 120, 115, 11]

// const chart = [110, 105, 95, 9, 80, 17, 120, 115, 11];

// const drawDown = (arr) => {
//   let max = 0;
//   let curr = 0;
//   for (i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[i - 1]) {
//       curr = arr[i - 1] - arr[i];
//     }

//     if (curr > max) {
//       max = curr;
//       num = arr[i];
//     }
//   }
//   return num;
// };

// console.log(drawDown(chart)); // 11

// const chart = [110, 105, 95, 9, 80, 17, 120, 115, 11];

// const spDrawDown = (arr) => {
//   let maxDrawDown = 0;
//   let currDrawDown = 0;
//   let peak = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > peak) {
//       peak = arr[i];
//       currDrawDown = 0;
//     } else {
//       currDrawDown = peak - arr[i];
//       if (currDrawDown > maxDrawDown) {
//         maxDrawDown = currDrawDown;
//       }
//     }
//   }

//   return maxDrawDown;
// }

// console.log(spDrawDown(chart)); // 109

// const chart = [110, 105, 95, 9, 80, 17, 120, 115, 11];

// const spDrawDown = (arr) => {
//   let maxDrawDown = 0;
//   let currDrawDown = 0;
//   let peak = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > peak) {
//       peak = arr[i];
//       currDrawDown = 0;
//     } else {
//       currDrawDown = peak - arr[i];
//       if (currDrawDown > maxDrawDown) {
//         maxDrawDown = currDrawDown;
//       }
//     }
//   }

//   return maxDrawDown;
// };

// console.log(spDrawDown(chart)); // 109

// const drawDown = (arr) => {

// }

// 11. Write a function summarize(text, trail, len)

// summarize(text, trail, len) returns the shortest preview of text.

// If text fits within len, then summarize returns the whole text.

// If text is longer than len, then summarize will truncate text and appends trail (e.g.  ... with a whitespace at the front) to the return string.

// The whole return string must fit into len, i.e. its length must not exceed len.

// The returned text must contain only whole words (i.e. words are separated by whitespace  ). Partial words are not allowed.

// If len is smaller than 3, and text does not fit len, summarize returns an empty string "".

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

// 15. Implement a programmable logic to compute compounded return

// Compounded returns are an investment strategy in which the interest income earned from the previous period is also invested into the current period.

// This is like how we earn interests from savings accounts.

// The interface (function signature) to this logic should be as simple as compoundedReturn(amount, interest, n) where amount is the amount of fund invested in the 1st period, interest is an interest percentage per period, and n is the number of periods of the investment.

const compoundedReturn = (amount, interest, n) => {
  for (i = 1; i <= n; i++) {
    amount = amount + (amount * interest) / 100;
  }

  console.log(amount);
};

compoundedReturn(100, 1, 1); // 101
compoundedReturn(100, 10, 1); // 110
compoundedReturn(100, 10, 2); // 121

// 16. Write a function mean(arr)

// mean(arr) returns the mean average value of arr dataset (represented as an array).

// If any one of arr members are of non-number type, mean(arr) returns null

// const mean = (arr) => {
//   let numSum = 0;
//   for (i = 0; i <= arr.length - 1; i++) {
//     if (typeof arr[i] !== "number") {
//       return null;
//     } else {
//       numSum = numSum + arr[i];
//     }
//   }
//   let meanSum = numSum / arr.length;
//   return meanSum;
// };

// console.log(mean([1, 2, 3]));
// console.log(mean([1, "foo", 3]));

// mean([1, 2, 3]); // 2
// mean([1, "foo", 3]); // null

// 17. Write a function mode(arr)

// mode(arr) returns the statistical mode from the dataset arr (represented as an array).

// A dataset's mode is the value which appears most frequently in a dataset. If none is found, or if there are no clear winner, mode(arr) returns null

// const mode = (arr) => {
//   const dict = {};
//   // arr.forEach((elem) => {
//   //   if (!dict[elem]) {
//   //     dict[elem] = 1;
//   //     return;
//   //   }
//   //   dict[elem] += 1;
//   // });
//   for (let i = 0; i < arr.length; i++) {
//     // const elem = arr[i];
//     if (!dict[arr[i]]) {
//       dict[arr[i]] = 1;
//       continue;
//     }
//     dict[arr[i]] += 1;
//   }

//   let maxFreq = 0;
//   let mode = null;
//   for (k in dict) {
//     const freq = dict[k];
//     console.log(dict[k]);
//     if (freq === maxFreq) {
//       mode = null;
//       continue;
//     }
//     if (freq > maxFreq) {
//       mode = k;
//       maxFreq = freq;
//     }
//   }
//   console.log(dict);
//   // return dict;
// };

// mode([1, 2, 1, 4, 5, 6, 2, 1]);
// console.log(mode([1, 2, 1, 4, 5, 6, 2, 1])); // 1
// console.log(mode([2, 5, 2, 4, 5])); // null

// Object.entries(
//   "ATGCCGGTTTT"
//     .split("")
//     .reduce(
//       (bucket, char) => ({
//         ...bucket,
//         [char]: isNaN(bucket[char]) ? 1 : bucket[char] + 1,
//       }),
//       {}
//     )
// ).sort(([, freq1], [, freq2]) => freq2 - freq1)[0][0];

// console.log(mode([2, 5, 2, 4, 5])); // null

// 18. Write a function mid(arr)

// mid(arr) returns the array containing middle element(s) of array arr.

// If the array length is an even number, mid returns the 2 middle elements.

// const mid = (arr) => {
//   let result = [];
//   let numMid = arr.length / 2;
//   let numMidDown = 0;

//   if (arr.length === 1) {
//     result.push(arr[0])
//     console.log(result);
//   } else if (arr.length % 2 === 0) {
//     result.push(arr[numMid - 1]);
//     result.push(arr[numMid]);
//     console.log(result);
//   } else {
//     numMidDown = Math.floor(numMid);
//     result.push(arr[numMidDown]);
//     console.log(result);
//   }
// };

// mid(["john"]); // "john"
// mid(["foo", "bar", "baz"]); // ["bar"]
// mid([1, 2, 3, 4]); // [2, 3]

// 21. Write a function flatMap(arr)

// flatMap(arr) takes in an array of arrays, and returns the flattened array.

// const ob = [
//   [1, 2, 3],
//   [100, 200],
//   [10, 20],
// ];

// const flatMap = (arr) => {
//   result = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       result.push(arr[i][j]);
//     }
//   }
//   return result;
// };

// console.log(flatMap(ob)); // [1, 2, 3, 100, 200, 10, 20]

// 22. Write a function mapMean(arr)

// mapMean(arr) takes in an array of arrays, and returns an array of numbers whose element at index i maps to the mean average value of arr[i].

// You are allowed to use mean(arr) written above.

// const ob = [
//   [1, 2, 3],
//   [100, 200],
//   [10, 20],
// ];

// const mapMean = (arr) => {
//   let result = [];
//   let meanResult = [];

//   for (let i = 0; i < arr.length; i++) {
//     let mean = 0;
//     for (let j = 0; j < arr[i].length; j++) {
//       result.push(arr[i][j]);
//       mean = arr[i][j] + mean;
//     }
//     meanResult.push(mean / arr[i].length);
//   }
//   return meanResult;
// };

// console.log(mapMean(ob)); // [2, 150, 15]

// 24. Write a function mapRevertSign(arr)

// mapRevertSign(arr) takes in an array of numbers, and returns a new array of numbers containing opposite signs of the original array.

// const arr = [1, -4, 2, 0];

// const mapRevertSign = (arr) => {
//   result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       result.push(arr[i]);
//     } else {
//       let reNum = arr[i] * -1;
//       result.push(reNum);
//     }
//   }
//   return result;
// };

// console.log(mapRevertSign(arr)); // [-1, 4, -2, 0]

// 26. Write a function unique(arr)

// unique(arr) takes in an array of numbers arr and returns a new array whose elements are unique.

// You are not allowed to use Set, but using isMember above is allowed.

// const numArr = [10, 20, 10, 20, 30, 50, 60, 100];

// const unique = (arr) => {
//   let uniqueArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!isMember(arr[i], uniqueArr)) {
//       uniqueArr.push(arr[i]);
//     }
//   }

//   return uniqueArr;
// };

// const isMember = (mem, arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (mem === arr[i]) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(isMember(5, [1, 3, 7, 12])); // false
// console.log(isMember("john", ["jane", "jim", "john"])); // true

// console.log(unique(numArr)); // [10, 20, 30, 50, 60, 100]

// 27. Write a function toBytes(s)

// toBytes(s) takes in a string s and returns an array of ASCII bytes. formed by s.

// If a character in s is invalid ASCII, the character is omitted from the returned array.

// Hint: JavaScript strings have method s.charCodeAt(i) which returns the ASCII code of the character at index i of string s

// const bar = "Bar";
// const foo = "Foo";
// const fooFire = "Foo🔥";

// const toBytes = (s) => {
//   let numToBytes = [];
//   for (let i = 0; i < s.length; i++) {
//     num = s.charCodeAt(i);
//     if (num <= 255) {
//       numToBytes.push(num);
//     }
//   }
//   return numToBytes;
// };

// console.log(toBytes(bar)); // [ 66, 97, 114 ]
// console.log(toBytes(foo)); // [ 70, 111, 111 ]
// console.log(toBytes(fooFire)); // [ 70, 111, 111 ] because the emoji is invalid ASCII

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

// Write a function markdownToHTML(md)

// markdownToHTML(md) takes in a Markdown string md and returns a HTML string parsed from md.

// You can just parse the header tags (<h1>, <h2>, and so on) and the paragraph tag <p> and ignore the rest of Markdown standard.

// Hint: JavaScript strings have method s.startsWith(p) which returns a boolean indicating whether s is prefixed with p

// const md = `
// # This is H1

// ## This is H2

// This is a paragraph
// `;

// const arrSpilt = md.split("\n").filter((s) => s !== "");

// console.log(arrSpilt);

// const markdownToHTML = (arr) => {
//   markDown = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].startsWith("# ")) {
//       let h1 = `<h1>${arrSpilt[i]}<h1>`.replace("# ", "");
//       markDown.push(h1);
//     } else if (arr[i].startsWith("## ")) {
//       let h2 = `<h2>${arrSpilt[i]}<h2>`.replace("## ", "");
//       markDown.push(h2);
//     } else {
//       let para = `<p>${arrSpilt[i]}<p>`;
//       markDown.push(para);
//     }
//   }

//   let result = "";

//   for (let j = 0; j < markDown.length; j++) {
//     result = result + markDown[j] + "\n";
//   }

//   return result;
// };

// // console.log(`<h1>${arrSpilt[0]}<h1>`);
// console.log(markdownToHTML(arrSpilt));

// <h1>This is H1</h1>
// <h2>This is H2</h2>
// <p>This is a paragraph</p>

// filterGtNeg(-20, [-1,-2, 2, 3, -100]) -100

// const filterGtNeg = (val, arr) => {

// }

// 7. Write a GCD function gcd(a, b)

// gcd(a, b) returns greatest common divisor (GCD / หรม.) between the pair a, b

// const gcd = (a, b) => {
//   while (b) {
//     let t = b;
//     b = a % b;
//     a = t;
//   }
//   return a;
// };

// function gcd(a, b) {
//   if (b === 0) {
//     return a;
//   }

//   return gcd(b, a % b);
// }

// console.log(gcd(10, 15)); // 5
// console.log(gcd(18, 12)); // 6
// console.log(gcd(3, 2)); // 1
