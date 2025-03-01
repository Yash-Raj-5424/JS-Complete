const user = {
    username : "Jack",
    fee : 999,

    welcomeMessage : function(){

        // console.log(username); // username is not in the function's scope but this.username is

        console.log(`Hello ${this.username}! Welcome to hackerBro`);
        console.log(this); // this refers to the object that called the method
        
        
    }
}

// user.welcomeMessage()
// user.username = "Josh"
// user.welcomeMessage() // the username is changed to Josh and it reflects in the object and other properties which is using the username

// console.log(this); // gives {} => an empty object in the node  environment but the browser's console gives a Window object => Window object is a global object inside the browser

function one(){
    const userName = "abc"
    console.log(this.userName); // prints undefined because this does not refer to the function's local scope in a regular function declaration
    // this inside a regular function (not inside an object) refers to The global object (window in browsers, global in Node.js) in non-strict mode. undefined in strict mode ("use strict";)

    console.log(this); // outputs the global object 'global' in node environment and the global object 'Window' in the browser
}
one()

// all of this works the same for a function expression

const funExpression = function(){
    let username = "ASAC"
    console.log(this.username);
    
}
funExpression()

const arrowFun = () =>{ // An arrow function's syntax : () => { // code here }
    let username = "overton"
    console.log(this.username); // works the same as regular function gives undefined
    console.log(this);
    
}
arrowFun()


// ******************* Implicit return in an arrow function ****************************

const addTwo  = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(4, 6)); // here if we add curly braces to an arrow function, then we must explicitly mention the keyword 'return' for returning any value from the funtion

const fun = ((num1, num2) => (num1 * num2)) // here, since curly braces are not added to the arrow function, so we don't need to mention the keyword 'return'. And adding a parantheses also doesn't affect this
console.log(fun(2, 6))

// It is a good practice to enclose anything in parantheses that we are returning from an arrow function while doing implicit return

// returning an object from an arrow function

const objArrowEx = () => {username: "Jack"}
console.log(objArrowEx()); // gives undefined since object is not enclosed in parantheses

const funct = () => ({username: "Gale", job: "chemist", salary: 990})
console.log(funct());

// *********************** IIFE ********************************************************
// IIFE stands for Immediately invoked function expression 
// IIFE is used :
//  To execute a function immediately
// To avoid polluting the global scope : IIFE creates a temporary execution context, preventing variables inside it from being accessible outside.Useful in older JavaScript versions before let and const were introduced

// It is very important to add a semicolon before and after an IIFE for proper execution

(function myFun(){
    console.log("I execute by IIFE");
})();

// an arrow function can also be executed by IIFE

// passing parameter to an arrow function to be run by IIFE

((name) => {console.log(`Hello ${name} this is an arrow function run by IIFE`);
})("Eduardo")