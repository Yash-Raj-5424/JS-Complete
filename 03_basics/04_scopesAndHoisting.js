{
    var a = 42
}

console.log(a); // a var declared inside a block scope is accessible even outside the block scope

function one(){
    console.log("function one executed");
    
    const username = "Jack"

    function two(){
        const website = "hackerPro"
        console.log(username);
        
    }

    // console.log(website); // website is not accessible here => out of scope of function two

    two() // this function call won't execute if the function one is not called below because two is called inside one. Hence, for the function call two to execute, the fuction one must be called. Therefore, two won't execute (even though called) until one is called => two will execute only when one executes.
    
}

one()

if(true){
    const name = "Jane "
    if(name === "Jane "){
        const title = "Pinkman"
        console.log(name + title); 
    }
    // console.log(title); // title is not accessible as it is out of the scope 
    
}
// console.log(name); // name is not accessible as it is out of the scope


// ************************* hoisting and function expression ********************************

console.log(addOne(54)); // a function can be called even before it is defined and this is called hoisting

function addOne(num){
    return num + 1
}

console.log(addOne(55)); 

const myfunc = function addTwo(number){ // a function expression 
    return number + 2
}

// console.log(addTwo(323)); // doesn't work : This is a function expression, where addTwo is given a name but is still assigned to the variable myfun.
// The function name addTwo is only available inside the function itself (it's a function's internal identifier).
// However, addTwo is not defined globally, so calling addTwo(323) results in an error.

console.log(myfunc(23)); // works well

// To correct the above error, use an anonymous function

// console.log(myfun); // doesn't work as the it is a function expression

const myfun = function(number){
    return number + 2
}
console.log(myfun(545));

// hoisting doesn't work for a function expression