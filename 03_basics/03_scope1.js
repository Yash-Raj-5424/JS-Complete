const a = 10
let b = 31
var c = 42

// console.log(a);
console.log(b);
// console.log(c);

{
    const x = 23
    let y = 52
    var z = 341
    // b = 4121 // b => global so it is accessible here
    let b = 99 // here b is some other variable local to this scope 
    console.log(b);
    
}

// console.log(`${x} , ${y}, ${z}`); // here, the x, y, z are not accessible as they are in a local scope. So, we cannot access it.but something which is written outside is in global scope to it and is accessible inside.

console.log(b); 

// The global scope in the console of IDE and that of the browser's inspect are different
