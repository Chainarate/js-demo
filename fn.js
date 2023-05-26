const numarr = [5, 6, 7, -5, -1, -2];

const filter = (arr, cd) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (cd(arr[i])) {
      result.push(arr[i]);
      console.log(arr[i]);
    }
  }
  return result;
};

const numNeg = (n) => {
  return n < 0;
};

const numPos = (n) => {
  return n >= 0;
};

console.log(filter(numarr, numNeg));
