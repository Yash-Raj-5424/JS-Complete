 /*
 const countries = [ "colorado", "mauritania", "senegal", "mali", "morocco"]

const values = countries.forEach( (item) => {
    return item
})

console.log(values); // It would print undefined. A for each loop doesn't return anything 
*/

// ********************************* .filter method *************************************

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const val = nums.filter( (item) => item > 5 ) // a filter method is used on arrays to create a new array containing only elements that satisfy a given condition. It does not modify the original array but instead returns a new one

// console.log(val);

const even = nums.filter((item) => {
    item % 2 == 0 // here, this doesn't work --> it doesn't return anything. Use return when using curly braces {} in an arrow function. For a single expression, you can use an implicit return without {}. Eg: nums.filter( (item) => item % 2 == 0) would work fine as there are no curly braces.
    // so we should explicitly mention the 'return' keyword when curly braces are there in the function callback of the filter method ---> return item % 2 == 0 would return even numbers 

})
// console.log(even);

const newNum = []
const number = nums.forEach( (item) => {
    if(item > 5) 
        newNum.push(item); //  this way we can extract the items out of the nums array
})

// console.log(newNum);

const books = [
    { name: "The Alchemist", price: 15.99, published: 1988, edition: 1, genre: "Fiction" },
    { name: "Atomic Habits", price: 20.99, published: 2018, edition: 1, genre: "Self-help" },
    { name: "The Hobbit", price: 25.50, published: 1937, edition: 2, genre: "Fantasy" },
    { name: "Walkers behind", price: 18.75, published: 1949, edition: 1, genre: "Dystopian" },
    { name: "Winterfell", price: 12.99, published: 1988, edition: 2, genre: "Fiction" },
    { name: "Sapiens", price: 22.49, published: 2011, edition: 1, genre: "History" }
];

// const mybooks = books.filter( (book) => book.genre === "Fiction" && book.price > 10)
// console.log(mybooks);

// ********************** .map method ******************************************************
// the .map method transforms elements and creates a new array. The array length is always the same length as the original array length. The callback function returns a new value for each element of the array. The .filter method is used when you want to transform each element into something else

const score = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const myScore = score.map( (runs) => runs + 100 )
// console.log(myScore);

// using multiple methods on the array simultaneously ********************************

const newScore = score
                    .map( (runs) => runs * 10)
                    .filter( (runs) => runs < 80)
                    .map( (item) => item + 5) // diff methods can have diff names for each element
                    .filter( (runs) => runs >= 20)

// console.log(newScore);


// ****************************** .reduce method *********************************************

const num2 = [1, 2, 3 ]
const newNum2 = num2.reduce( function(accum, curVal) { 
    console.log(`accumulator: ${accum} and current val: ${curVal}`);
    return accum + curVal
} , 0)

console.log(newNum2); // .reduce adds all the accumulator and the current values. Initially, the accumulator takes the value passed to it after the function body and then updates it to the sum of accum and curVal in each iteration

const nums2 = num2.reduce( (accum, cur) => accum + cur , 0)
console.log(nums2);


const myCart = [
    {
        item: "book",
        price: 1300
    },
    {
        item: "jeans",
        price: 700
    },
    {
        item: "laptop",
        price: 999
    }
]

const price = myCart.reduce( (acc, myitem) => acc + myitem.price , 0)
console.log(price);
