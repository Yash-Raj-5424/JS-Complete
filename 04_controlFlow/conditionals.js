if(true){
    const power = "fly"
    console.log(`User has the power to : ${power}`);
    
}

// console.log(power); // here, the variable power is not accessible as it is out of the scope of the if statement where it was declared and intialized. But if power was a var, then it would have been accessible here also.

if(23 < 12) console.log("I can be executed"), // this can execute even without mentioning scope
    console.log("I can also be executed");  // but it is a bad practice
    ;

