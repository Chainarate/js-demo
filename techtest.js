// Function

// 1. Parameters and return values

// 1.1 Basic parameters and return values
// Given this function:

// function add(a, b) {
//   return a + b;
// }

// 1.1.1 How many parameters add accepts?
// Ans 2

// 1.1.2 What are the possible return types of add?
// Ans number and string

// 1.1.3 What is the return value of add(1, 2)?
// Ans 3

// 1.1.4 What is the return value of add(1, "2")?
// Ans 12

// 1.1.5 What is the return value of add("foo", "bar", "baz")?
// Ans foobar

// 1.1.6 What is the return value of add(1, 2, 3)?
// Ans 3

// 1.1.7 What is the return value of add(10, add(1, 2, 3))?
// Ans 13

// 1.2 Default parameters
// Given this function:

// function add(a, b = 10, c = 20) {
//     return a + b + c;
//   }

// 1.2.1 How many arguments add accepts?
// Ans 3

// 1.2.2 What is the return value of add(1, 2)?
// Ans 23

// 1.2.3 What is the return value of add(1)?
// Ans 31

// 1.2.4 What is the return value of add(10, add(1, 2, 3))?
// Ans 36

// 1.3 Advanced function parameters

// function sum(...numbers) {
//   // Body
// }

// sum is supposed to takes in variadic parameters (as indicated by the spread operator ...), and returns the sum of all numbers. For example, sum(10, 20, 30) should return 60.

// 1.3.1 What is the variable type of numbers in sum's body?
// Ans Array

// 1.3.2 Implement sum with the above function signature.
// Ans
// function sum(...numbers) {
//   let sumNum = 0;
//   for (i = 0; i < numbers.length; i++) {
//     sumNum = sumNum + numbers[i];
//   }
//   return sumNum;
// }

// ========================================================================================

// 2. Arrow functions

// 2.1 Named functions
// Given this function:

// function isNeg(n) {
//   return n < 0;
// }
// 2.1.1 How many ways can we rewrite isNeg as an arrow function? (assuming we keep the expression n < 0 unchanged)
// Ans 2 way
// const isNeg = (n) => {
//   return n < 0;
// };
// const isNeg = (n) => n < 0;

// 2.1.2 What is the least verbose way (least characters used) to rewrite isNeg as an arrow function?
// Ans const isNeg = n => n < 0;

// Now, if we have this function:

// function assignLegalAge(obj) {
//   obj.age = 18;
// }
// assignLegalAge takes in an object obj and writes property obj.age to 18.

// 2.1.3 How many ways can we rewrite assignLegalAge as an arrow function? (assuming we keep the statement obj.age = 18; unchanged)
// Ans 2 Way
// const assignLegalAge = (obj) => {
//   obj.age = 18;
// };
// const assignLegalAge = (obj) => obj.age = 18;

// 2.1.4 What is the least verbose way (least characters used) to rewrite assignLegalAge as an arrow function?
// Ans const assignLegalAge = obj => obj.age = 18;

// 2.1.5 What is the difference between assignLegalAge and isNeg that made your 2.1.3 answer differ from 2.1.1?
// Ans 'assignLegalAge' will assign age to 18 but 'isNeg' will return result if n < 0 (condition)

// 2.2 Anonymous (unnamed) functions
// 2.2.1 Rewrite the following snippet with arrow function:

// const negs = nums.filter(function (n) {
//   return n < 0;
// });

const negs = numfilter((n) => n < 0);

// 2.3 Methods
// 2.3.1 What is a method?

// 2.3.2 Give 3 examples of methods on JavaScript string type

// 2.3.3 Give 3 examples of methods on JavaScript Array type

// 2.4 Iterator methods
// 2.4.1 What is the return value of a callback function passed into Array.filter method?

// 2.4.2 What is the return type of the Array.filter method?

// Now, given this snippet:

// const numbers = [-2, -1, 0, 1, 2];
// const isNegs = numbers.map(cb);
// const negs = numbers.filter(cb);
// 2.4.3 We can see that the callback passed into number.map and number.filter is identical: a named function cb.

// Replace cb with anonymous function that would make variables isNegs become [true, true, false, false, false], and negs [-2, -1].

// 2.5 Advanced iterator
// Given this snippet:

// const numbers = [10, 20, 30, 40, 50];
// const result = numbers.map(cb);
// 2.5.1 Implement cb as an annonymous arrow function such that result is [1, 3, 5].
