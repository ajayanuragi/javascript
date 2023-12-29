const myarr = [1,2,3,45,6,7]
//arrays make shallow copy, i.e if we change something in copy of array the real array will also change
//console.log(myarr);
myarr.push(89); // 89 is added at the last
myarr.pop(); // remove last element
myarr.unshift(89) // 89 is added to the start
myarr.shift(); // remove first element
const newarr = myarr.join(); // add all elements of myarr to newarr and make them string
//console.log(myarr);
//console.log(newarr);

//myarr = [1,2,3,45,6,7]
// slice and splice
const n1 = myarr.slice(1,3) 
console.log(myarr); //[ 1, 2, 3, 45, 6, 7 ]
console.log(n1); //[ 2, 3 ]

const n2 = myarr.splice(1,3)
console.log(myarr);//[ 1, 6, 7 ]        
console.log(n2); //[ 2, 3, 45 ]