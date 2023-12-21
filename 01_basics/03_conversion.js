let score = "33";
let valueInNumber  = Number(score);

console.log(typeof(score)) 
console.log(typeof(valueInNumber)) // Nan

// "33" => 33
// "33abc" => NaN (not a number)
// true => 1


let isLoggedIn = true;

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn)

// 1 => true; 0=>false
// "" => false;
// "ajay" => true;

let marks = 11;
let stringMarks = String(marks);

console.log(typeof stringMarks);