let date = new Date();
console.log(date.toString());
let myTimeStamp = Date.now();
console.log(myTimeStamp);// in mili seconds
console.log(Math.floor(myTimeStamp/1000)) // in seconds
console.log(date.toLocaleString("default",{
    weekday:"long",
    
}))