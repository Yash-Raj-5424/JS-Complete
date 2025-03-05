// ************** for of loops *******************************

let myarr = ["India", "Costa Rica", "Palau", "El Salvador"]
/*
for (const element of myarr) {
    console.log(element);
}

const str = "Valar Morghulis!"

for (const character of str) {
    console.log(`character is ${character}`);
}
*/
// for of loops in maps

const map = new Map()
map.set('Guatemala', "Guatemala city")
map.set('Honduras', "Tegucigalpa")
map.set('Costa Rica', "San Jose")
map.set('Nicaragua', "Managua")
map.set('Honduras', "Tegucigalpa") // map doesn't take duplicate values. It only stores unique key value pairs
/*
for (const keys of map) {
    console.log(keys); // directly prints both the key-value pairs
}

for (const [key , value] of map) {
    console.log(key); // prints only keys
    console.log(value); // prints only values
}
*/
// for of loops on objects
const myObj = {
    one: 100,
    two: 32,
    three: 133
}

// for (const key of myObj) { // the objects are not iterable using for of loops
// console.log(myObj[key]); 
// }
// we use for in loops to iterate the objects in js