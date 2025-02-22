function calculateCartPrice(num){
    return num;
}
console.log(calculateCartPrice(200)); // this function call prints 200 

// but what if we pass more than one values to the fucntion which was defined to accept only one value, it returns the first value passed to it. Below shows the example:

console.log(calculateCartPrice(200, 400, 1000)); // prints 200

// for such a condition we use rest operator in the function definition to accept any no. of arguments passed to it

function restOperatorDemo(...nums){
    return nums
}

console.log(restOperatorDemo(200, 4000, 5000, 1199)); // It would return an array of all the values passed to it

function findInCart(val1, val2, ...numb){
    return numb
}

console.log((findInCart(200, 5000, 421, 343, 453, 542))); // the first two values passed are not reflected in the array as they are taken by the val1 and val2

// using objects in functions **********************************************************

const user = {
    name: "jack",
    price: 200
}

function handleObject(anyObject){
    console.log(`The name is ${anyObject.name} and the price is ${anyObject.price}`); // If we try to access something which is not there in the object passed, we get undefined
    
}

handleObject(user) 

// we could directly pass an object to the function call also

handleObject({
    name: "jane",
    price: 500000
})

// Passing array to a function

const myArr = [22, 44, 5, 6, 1]

function getArrIndex(numsArr){
    return numsArr[1]
}

console.log(getArrIndex(myArr));

// we can also directly pass an array to the function

console.log(getArrIndex([1, 3, 45, 5, 67,53 ]))
