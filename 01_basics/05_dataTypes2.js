// There are two main categories of data types based on how they are stored and accessible
/*
1. Primitive data types - call by value
    Number, String, Boolean, null, undefined, BigInt, Symbol
 */
const score = 1234
const age = Symbol('1234')
const age2 = Symbol('1213') // Symbol returns a data type whose type is symbol
// console.log(age == age2);
// console.log(typeof age); // gives symbol


const myId = null
// console.log(typeof myId); // It gives null


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


// ******************* Memory Management *************************************************

// The primitive data types are stored in the stack memory and when we want a reference of that variable, a shallow copy of the actual one is returned and any changes made via reference only reflects in the reference variable but not in the actual variable

let myName = "yash"
let newName = myName
// console.log(newName);

newName = "raj"
// console.log(newName);
// console.log(myName); // the actual variable is not changed, as we get a copy of the actual variable and hence the changes made reflect in the copied variable not the actual one

// The non primtive data types are stored in the heap memory and when we want its reference, the reference to the actual variable itself is returned. Hence, any changes made to the reference variable also reflects in the actual variable

let user1 = { // here the variable user1 has a reference to the object stored in the heap memory
    userEmail : "user@gmail.com",
    upiId : "user@ybl"
}

let user2 = user1 // here the variable user2 also has the reference to the same object in the heap memory and no extra copy is created for referencing.

user2.upiId = "user2@okAxis" 
// Any change made via a reference variable reflects in the actual object also since it has the reference to the actual object itself (in heap memory)

console.log(user2.upiId);
console.log(user1.upiId);

