const score = 100;
console.log(score);
const balance = new Number(200);
console.log(balance.toFixed(2));

const percentage = 78.89;
console.log(percentage.toPrecision(2));// 79

const hundreds = 10000
console.log(hundreds.toLocaleString("en-In")); // 10,000


// Maths
const max = 20;
const min = 10;
// random value bw 10 and 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
