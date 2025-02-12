// simple comparisons like >, <, >=, <=, != 
// Note that == is an equality check and not treated as a comparison

// console.log("2" > 3); // it converts the "2" to a number and then compares
// console.log("02" < 4); // treats "02" as 2 and compares

// console.log("3" < "2");

console.log(null > 0); // null is converted to 0 and since 0 > 0 is false, it gives false
console.log(null == 0); // this is equality check so, null is not converted
console.log(null >= 0); // here it converts null to zero (0) so it gives true

// null is converted to 0 only for comparisons, not for equality check

console.log(undefined > 0); // gives false
console.log(undefined == 0); // gives false
console.log(undefined >= 0); // gives false

// === is for strict check. It checks data type along with the values
console.log("2" === 2); // value is the same but the datatype is different (false)
console.log("2" === "1"); // the datatype is same but the value is different (false)



