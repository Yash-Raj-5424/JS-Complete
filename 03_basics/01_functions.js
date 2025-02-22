
function myFunction(){
    console.log("A demo function in javascript"); 
}
// myFunction()

function add(num1, num2){ 
    console.log(`The sum is ${num1+num2}`);
}

// add() // It gives NaN as we did not pass any arguments and hence it returns NaN

// add(24, 12)
// add(2, "4") // we didn't know the types of num1, num2 hence it got added as strings
// add(4, "C")
// add(3, null)

const sum = add(12, 42) 
// console.log("Sum: ", sum); // this gives undefined as we did not mention any return value so, nothing gets stored in the sum variable hence when we try print it, it gives undefined

function Addition(num1, num2){
    return num1 + num2
}

const ans = Addition(23, 53)
console.log(ans);

function userLoginMessage(username){ 

    if(!username){ // this is equivalent to username === undefined
        console.log("Please enter a valid username");
        return
    }

    return `${username} just logged in`
}

// console.log(userLoginMessage(""))
// console.log(userLoginMessage());
// console.log(userLoginMessage("Jack"));

// ************** Default function arguments **********************************

// If we don't pass any value to the calling function, then the default value is copied, otherwise the passed value overrides the default value

function message(userName = "default argument"){ 
    return`${userName} has logged in`
}

console.log(message()); // here, we don't pass anything but we have a default argument value in the function definition so, that default value is copied here.

console.log(message("")); // here, the "" overrides the default argument
console.log(message("eduardo")); // here, the argument eduardo overrides the default argument



