// There are two main categories of data types based on how they are stored and accessible
/*
1. Primitive data types - call by value
    Number, String, Boolean, null, undefined, BigInt, Symbol
 */
const score = 1234
const age = Symbol('1234')
const age2 = Symbol('1213') // Symbol returns a data type whose type is symbol
console.log(age == age2);
console.log(typeof age); // gives symbol


const myId = null
console.log(typeof myId); // It gives null


const bigNum = 41543453562134535214n // it is automatically stored as big integer

// 2. Non Primitive type (reference type)
// Arrays, Objects

const arr = ["abc", "sfd", "dsf"];

let myObj = {
    name : "yash",
    myAge : 19
}

let myFunction = function(){
    // console.log("Hello World");
    
}

// console.log(typeof myId);
// console.log(typeof myObj);
// console.log(typeof myFunction);

// all the non primitive have a typeof object but the type of a function is a function object


