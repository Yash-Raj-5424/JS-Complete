let myDate = new Date()
// console.log(typeof myDate); // object

// console.log(myDate.toString()); // Tue Feb 18 2025 03:50:24 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Tue Feb 18 2025
// console.log(myDate.toISOString()); //2025-02-17T22:20:24.524Z
// console.log("same");
// console.log(myDate.toJSON()); // 2025-02-17T22:20:24.524Z
// console.log(myDate.toLocaleDateString()); // 18/2/2025
// console.log(myDate.toLocaleString()); // 18/2/2025, 3:50:24 am

// let newDate = new Date(2025, 0, 31) // months start form 0
// let newDate = new Date(2012, 3, 4, 5, 20) // mentions time also => 4/4/2012, 5:20:00 am
// let newDate = new Date("2012-01-13") // gives any time by default
// let newDate = new Date("30-10-2021") // months should be before the date i.e MM-DD-YYYY required
let newDate = new Date("01-12-2021")

// console.log(newDate.toLocaleString());
let myTimeStamp = Date.now() // gives the millisecond values from 1st Jan 1970 till now

console.log(myTimeStamp);
// we can compare any time with any date 
console.log(newDate.getTime());
// to get the date in seconds instead of milliseconds: 
console.log( Math.floor(newDate.getTime()/1000) ); // gives the values in seconds
console.log(Math.floor(Date.now()/1000));

let myCreatedDate = new Date()
console.log(myCreatedDate.getMonth); // note that months start from 0 in js
// similarly there are other methods to get day, hours, minutes, seconds, date etc.

myCreatedDate.toLocaleString('default', {  // toLocaleString has many functions and takes many parameters
    weekday: "long"
})








