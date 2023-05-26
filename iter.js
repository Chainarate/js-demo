// const num = [20, 50, 142, 320];

// num.forEach((num, idx) => {
//   console.log(num + 100, idx);
// });

// function isNeg(n) {
//   return n < 0;
// }

// const numarr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const namearr = ["Mr Geno", "Mr Bean", "Mrs Snow", "Big", "Ms A"];

// namearr.forEach((v, idx) => {
//   if (v.startsWith("Mr")) {
//     console.log(v, idx);
//   }
// });

// const numA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = numA.map((n) => n % 2 === 0);
// console.log(result);

// const resultMr = namearr.map((s) => s.startsWith("Mr"));

// console.log(resultMr);

// const namelength = namearr.map((s) => s.length);

// console.log(namelength);

// const num = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23, 24, 25, 26,
// ];

// const filternum = num.filter((n) => n % 3 === 0 || n % 13 === 0);
// console.log(filternum);

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const map = (inputs, cd) => {
//   let mapped = [];
//   for (let i = 0; i < inputs.length; i++) {
//     mapped[i] = cd(inputs[i]);
//   }
//   return mapped;
// };

// const mapfunc = (n) => {
//   return n % 2 === 0;
// };

// console.log(map(num, mapfunc));

// Object

// {
//     ["art", 26, true],
//     ["tiger", 23, false],
//     ["build", 29, false],
// }

const personFactory = (person) => {
  return {
    name: person[0],
    age: person[1],
    isHandsome: person[2],
  };
};

const peopleFactory = (arr) => {
  return arr.map((v) => personFactory(v));
};

console.log(
  peopleFactory([
    ["art", 26, true],
    ["tiger", 23, false],
    ["build", 29, false],
  ])
);

const bodin = {
  name: "bodin",
  type: "school",
  students: [{ name: "art" }, { name: "beam" }, { name: "mond" }],
  teacher: [{ name: "boo" }, { name: "somchai", wife: "boo" }],
  address: undefined,
};

console.log(bodin.address, bodin.foobar, bodin.type);
console.log("address" in bodin, "foobar" in bodin);
