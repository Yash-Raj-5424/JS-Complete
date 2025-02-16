const score = 100
// console.log(score); // it is a number
const balance = new Number(100) // creates an object whose type is a Number
// console.log(balance);
// The Number has different methods such as toString, toFixed, valueOf etc.

// console.log(typeof balance.toString()) // after the no. is changed to string, we can use various string functions with it
// console.log(balance.toFixed(2)); // fixes the precision of the no. to two decimal places


// const noToString = balance.toString()
// console.log(noToString.length);

const num = 1234.83343
// console.log(num.toPrecision(3)); // .toPrecision method takes a parameter of the no. of significant figures you want in your no. and returns a string with the passed no. of significant digits. But with default parameter, returns the same value


const nums = 1000000
// console.log(nums.toLocaleString()); // default in US style (depends on the environment)
// console.log(nums.toLocaleString('en-IN'));

// console.log(Number.MAX_VALUE); // there is a safe MAX_SAFE_INTEGER and MIN_SAFE_INTEGER
// console.log(Number.MIN_VALUE);

// ********************************* Maths ************************************************
// console.log(Math);
// console.log(Math.abs(-42.52)); // gives absolute value of a passed number
// console.log(Math.round(323.51));
// console.log(Math.ceil(4.1)); // Adds 1 to the integer part and returns it. Here => 5
// console.log(Math.floor(52.9));// returns only the integer part. Here => 52
// console.log(Math.min(21, 43, 54, 1, 5)); // returns the minimum no. among the passed ones
// console.log(Math.max(21, 43, 54, 1, 5)); // returns the maximum no. among the passed ones

// console.log(Math.random()); // generates floating point numbers in the range [0, 1)
// console.log((Math.random()*10) + 1); // generates floating point no. in the range [1, 11)
// console.log(Math.floor(Math.random()*10) + 1); // to generate only the integers in [1, 10]

const max = 30
const min = 10
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // max-min is for the range in which we want our number to be and 1 is added to avoid 0 say when max and min are both equal.Now it returns the value from 1 to max. So we add min to get the values in min to max range









