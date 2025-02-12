// let age = "33"
// let score = "23xyz"

// console.log(typeof age); // we can also use typeof(age) <= used as a function
// console.log(typeof score);

// let valueInNumber = Number(age)

// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// let convertedInNumber = Number(score) // here, score is converted actually but the actual type of score is NaN => NaN is also a type

// console.log(typeof convertedInNumber);
// console.log(convertedInNumber); // gives NaN => not a number


let age2 = null

let age2InNumber = Number(age2)
// console.log(typeof age2InNumber);
// console.log(age2InNumber);

let age3 = undefined
let age3InNo = Number(age3)
// console.log(typeof age3InNo);
// console.log(age3InNo);

let isValid = true

let isValidInNo = Number(isValid)
// console.log(typeof isValidInNo); // the typeof says it is converted 
// console.log(isValidInNo); // but actually it is not

let name = "yash"

let nameInNum = Number(name)
// console.log(typeof nameInNum); // the typeof says it is converted 
// console.log(nameInNum); // but actually it is not

// Boolean conversions

let isLoggedIn = "avc"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn); // the typeof says it is converted to boolean
console.log(booleanIsLoggedIn); // and it is actually also converted to boolean only

// 0 => false; 1 => true; also for any value other than 0, the boolean conversion is true
// "" => false; "abc" => true

// string conversions
let num = 234
let stringNum = String(num)
console.log(num);
console.log(typeof stringNum); // it is actually converted to a string
