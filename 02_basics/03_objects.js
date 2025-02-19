// objects declared as literals are not singleton
// Object.create => this is how the objects are made using constructor and here it is singleton

// the objects in js are in the key value pair format where the values can be anything like number, string, array, boolean etc. and the keys are internally treated as strings

const mySym = Symbol("key1")
const sym2 = Symbol("key2")

const user = {  // this is an object literal
    name : "yash", //  here the key name is treated as "name"
    2: "raj", // here also, the key 2 is treated as a string i.e, "2"
    "full name": "Yash Raj",
    age: 19,
    mySym : "myKey1",
    [sym2] : "myKey2",
    isLoggedIn : false, 
    location: "Bangalore",
    socres : [12, 14, 55, 100],
    email: "yash@google.com"
}

// accesing the objects => two ways: using dot(.) and []
// console.log(user.name);
// console.log(user["name"]); // user[name] is not valid as the name is internally treated as "name"
// console.log(user["full name"]); // user."full name" is not allowed
// console.log(user["mySym"]); // user[mySym] would give undefined because for a Symbol to be defined as key in the object, it should be written inside []. Note that the typeof for user[mySym] is undefined here

// console.log(typeof user[mySym]); // gives undefined as it looks for a Symbol mySum but since the mySym is written without [], it is treated as string and to access a string, you need to specify its type by adding " " => typeof user["mySym"] -> this would give string

// console.log(user[sym2]);
// console.log(typeof user[sym2]);
// console.log(typeof sym2);
console.log(user.sym2); // gives undefined because JavaScript automatically converts dot notation (user.sym2) into "sym2" (a string), which does not match the Symbol key as sym2 was defined as a symbol key in the object i.e, [sym2] .
console.log(user.mySym);


// console.log(user["sym2"]); // gives undefined because here, the sym2 is written inside [] which makes it a Symbol type key and Symbols do not get automatically converted to strings when used as object keys.
// Symbol type keys must be accessed using the exact Symbol reference, not their description.

// ************* changing the values of objects ************************************
// user.email = "yash@openAI.com"
// console.log(user);

// we can fix the objects so that no one can change it
// Object.freeze(user)
// user.age = 32
// console.log(user["age"]);

// user.greeting = function(){
//     console.log("Hello js user");
// }
// console.log(user.greeting); // returns a reference to the function but the function is not executed yet
// console.log(user.greeting());

// user.greetingWithName = function(){
//     console.log(`Hello js user ${this.name}`);
// }
// console.log(user.greetingWithName); // this gives an anonymous function reference
// user.greetingWithName();




