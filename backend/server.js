const { faker } = require('@faker-js/faker/locale/en_US')

// for (let i = 0; i < 5; i++) {
//  let rng = new Set();
//  while (rng.size < 25) {
//   let r = Math.floor(Math.random() * 25);
//   rng.add(r);
//  }
//  let rArray = Array.from(rng);
//  console.log(`Array-${i + 1}: `, rArray);
// }

let a1 = [
 20, 12, 0, 23, 15, 4, 3, 9, 8, 7, 19, 16, 2, 10, 6, 24, 22, 14, 21, 1, 5, 11,
 18, 13, 17,
];
let a2 = [
 2, 19, 13, 14, 1, 7, 9, 4, 5, 17, 12, 23, 10, 6, 22, 20, 15, 24, 3, 8, 16, 11,
 21, 0, 18,
];
let a3 = [
 2, 19, 17, 3, 21, 18, 9, 24, 0, 4, 7, 22, 16, 5, 13, 10, 8, 11, 1, 23, 14, 12,
 6, 15, 20,
];
let a4 = [
 10, 14, 11, 2, 7, 1, 20, 9, 8, 21, 17, 16, 22, 13, 3, 19, 23, 0, 24, 18, 15, 4,
 6, 5, 12,
];
let a5 = [
 4, 19, 23, 0, 10, 11, 12, 3, 8, 9, 1, 18, 24, 21, 7, 15, 17, 2, 13, 16, 20, 5,
 22, 6, 14,
];

// let allRandomNums = new Set();

// while (allRandomNums.size < 9765624) {
//  let ar1 = Math.floor(Math.random() * 25)
//  let ar2 = Math.floor(Math.random() * 25)
//  let ar3 = Math.floor(Math.random() * 25)
//  let ar4 = Math.floor(Math.random() * 25)
//  let ar5 = Math.floor(Math.random() * 25)
//  allRandomNums.add(`${ar1}${ar2}${ar3}${ar4}${ar5}`);
//  console.log(`${ar1}${ar2}${ar3}${ar4}${ar5}`);
// }

// let result = Array.from(allRandomNums)

console.log(faker.name.fullName());
