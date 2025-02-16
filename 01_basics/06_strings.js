const name = "yash" // it also invokes an object behind the scenes
const score = 24

// console.log(name + score + "@gmail.com"); // not a recomended way to concatenate any datatypes

// console.log(`My name is ${name} and my score is ${score}`);  
// this method is called string interpolation 

const name2 = new String("rajYash") // stored as objects

// console.log(name2.__proto__); // accessing the string objects

// accessing the prototypes of strings (string methods)

// console.log(name2.length);
// console.log(name2.toUpperCase());
// console.log(name2.charAt(4));

// console.log(name2.charAt('Z')); // since 'Z' is NaN, it behaves like charAt(0) and returns the first letter

// const newString = name2.toUpperCase()// does not change the actual string object
// console.log(newString);
// console.log(name2);

// console.log(name2.indexOf('s'));

// console.log(name2.indexOf('y')); // returns -1, if the char does not exists in the string passed

// ************************* substring method **********************************************

// console.log(name2.substring(1, 4)); // the end is exclusive
// console.log(name2.substring(5, 1)); // automatically swaps if start > end

// console.log(name2.substring(-7, 4)); // if we pass -ve index, it treats it as 0
// console.log(name2.substring(-4, -1)); // both start and end are zero, so prints nothing

// **************************** slice() method *********************************************

// console.log(name2.slice(0, 5)); // end is exclusive
// console.log(name2.slice(-10, 2));
// console.log(name2.slice(-4, 6)); // starts the -ve indexing from behind 
// console.log(name2.slice(-7, -2));
// console.log(name2.slice(-2, -7)); // cannot slice backwards, so returns nothing

// console.log(name2.slice(-10, 12)); // start beyond the string length, treated as 0 and end is beyond the string length => extracts till the last. So it returns complete string

// console.log(name2.slice()); // no arguments => does not slice 

// *************************** substr() method ********************************************

// The substr() method is now deprecated and isn't recommended to use

// console.log(name2.substr(1, 5)); // starts at 1st index and takes next 5 character from the string
// console.log(name2.substr(-6, 5)); // starts at 6th index from behind and takes next 5 characters
// console.log(name2.substr(-13, 4)); // treats -13 as 0 and takes next 4 characters

// console.log(name2.substr(13, 53)); // if none of the index is accessible, returns nothing

// console.log(name2.substr()); // no arguments, returns the whole string

// ******************************** trim() method *****************************************

// removes starting and trailing white spaces and line terminators (new lines i.e "\n" ) from a string

const str = "  helloWorld   "
// console.log(str.trim()); 

// console.log(str.trimStart());
// console.log(str.trimEnd());

// ********************* replace() method *******************************************

const myURL = "https://yash.com/yash%10Mishra"
// console.log(myURL.replace('%10', '-')); // replaces the %10 char with a - char
// console.log(myURL.replace('abc', 'xyz')); // abc is not present, so doesn't replace anything

// console.log(myURL.replaceAll(myURL, "abc")); // replaces the whole string with the passed one

// console.log(myURL.repeat(2)); // repeats the string the no of times the parameter is passed

// ******************************* split(separator) method ***********************************

// splits the string based on seaprator character passed and returns an array of separated parts

const word = "hello-I-am-Yash"
console.log(word.split('-'));
console.log(word.split('-', 2)); // 2 is the limit which is the length of the array to be returned

const arr = word.split('-')
console.log(arr[2]);












