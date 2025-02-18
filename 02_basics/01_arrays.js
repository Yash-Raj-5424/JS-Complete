console.log("arrays");
// Arrays in js are resizable 
// Arrays in js can contain mixed types of elements at once E.g: [1, 3, false, "Yash"]
// Js array-copy-operations create shallow copies of arrays rather than deep copies
// shallow copy of an object shares the same references from the source object from which the copy was made. this means, the changes made from the reference also reflects in the original object

const myArr = [1, 2, 3, 4, 5]
// console.log(myArr);

myArr.push(0)
// console.log(myArr);
myArr.pop()
// console.log(myArr);

myArr.shift() // removes the first element from the array and returns it
// console.log(myArr);

// console.log("unshift returns the length of the array after inserting at front");

// console.log(myArr.unshift(10)) // insert the element at the start of the array and returns its length
// console.log(myArr);

// console.log(myArr.includes(4))
// console.log(myArr.indexOf(3))

const newArr = myArr.join() // Adds all the elements of an array into a string, separated by the specified separator string. The default separator is a comma (,) we can pass any desired separator in single or double quotes 

// console.log(newArr);
// console.log(typeof newArr); // gives a string

// ***************************** slice() and splice() methods ********************************

const arr = [1, 2, 34, 5, 6, 77, 12, 51, 53]
console.log("Original Array: " ,arr);

const arr2 = arr.slice(1, 4) // the end argument is exclusive from the range
// @param start: The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.
// @param end: The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.

console.log("Sliced: ", arr); // slice() does not modify the original array
console.log(arr2);

const arr3 = arr.splice(1, 4) // the first argument is the index from which we want to remove the elements and the second argument is the no of elements to be deleted from the specified index
// returns a copy of the deleted elements from the array

console.log("Spliced: " , arr); // splice() changes the original array itself
console.log(arr3);



