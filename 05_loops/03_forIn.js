const myObj = {
    first : "jack",
    second: "jane",
    third: "jimmy",
    fourth: "josh"
}

for (const key in myObj) {
    // console.log(key); // prints only the keys
    // console.log(myObj[key]); // prints only the values
    
    // console.log(`${key} : ${myObj[key]}`); // prints both, the key and the values  
}

// for in loops in arrays

const myarr = [33, 54, 53, 12, 66, 13]
for (const key in myarr) {
    // console.log(key); // prints the indices of the arrays
    // console.log(myarr[key]); // prints the elements of the array
    
}

// for in loops on maps

const map = new Map()
map.set('a', 100)
map.set('b', 400)
map.set('c', 200)

for (const key in map) { // for in loops do not work on maps as 
    console.log(key);
}