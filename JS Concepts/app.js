arr = [5, 4, 9, 36, 3, 4, 9, 5, 4, 2, 3, 9, 5, 6, 56, 56, 5, 6, 24, 85];

//const output=arr.reduce(function(1stparam,2ndparam){})
const output = arr.reduce(function (acc, curr) {
  if (curr < acc) {
    acc = curr;
  }
  return acc;
}, arr[0]);

console.log(output);
