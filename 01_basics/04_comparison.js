// console.log("2" > 1); // true
// console.log("02" > 1); // true

// Try to compare withsame datatypes only. because with different datatypes 
//comparison might not give expected result

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >=0); // true

// when there is ==, behind the scene there is type conversion
console.log("2" == 2); // true
// strict check, === checks if datatype and values are equal or not
console.log("2" === 2) //false