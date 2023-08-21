const arr = [
  { firstname: "arnab", lastname: "samanta", age: 26 },
  { firstname: "Debangshu", lastname: "Das", age: 54 },
  { firstname: "Mitali", lastname: "samanta", age: 46 },
  { firstname: "arpan", lastname: "samanta", age: 19 },
  { firstname: "kaushik", lastname: "saha", age: 32 },
  { firstname: "soumen", lastname: "mali", age: 32 },
];

//acc={32:2,26:1,54:1,46:1,19:1,}
const output = arr.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

//first name of people whose age is less than 35=[arnab,arpan,soumen,kaushik]

const output1 = arr.reduce(function (acc, curr) {
  if (curr.age < 35) {
    acc.push(curr.firstname);
  }
  return acc;
}, []);
console.log(output1);
