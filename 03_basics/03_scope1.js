const a = 10
let b = 31
var c = 42

// console.log(a);
// console.log(b);
// console.log(c);

{
    const x = 23
    let y = 52
    var z = 341
    // b = 4121 // b => global so it is accessible here
    let b = 99 // here b is some other variable local to this scope 
    // console.log(b);
    
}

// console.log(`${x} , ${y}, ${z}`); // here, the x, y, z are not accessible as they are in a local scope. So, we cannot access it.but something which is written outside is in global scope to it and is accessible inside.

// console.log(b); 

// The global scope in the console of IDE and that of the browser's inspect are different
let num = 32

{
    console.log(num); // num is a global variable so it is accessible here
    num = 324 // changed the value of a global variable
    console.log(num);
        
}
console.log(num); // the value of num was changed inside a block scope but it is reflected everywhere as num is a global variable

// ********************************** Bad practice ********************************************

// If var is declared inside a function without var, let, or const, it becomes implicitly global, which is bad practice

function example(){
    name = "implicit global variable"
}

example(); // the name won't be accessible outside the function scope until the function is called and gives a Reference Error: name is not defined

console.log(name); 

// For better scoping and to avoid unintended global variables, it's recommended to use let or const instead of var.
