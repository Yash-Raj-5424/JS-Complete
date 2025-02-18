const arr1 = ["joe", "jack", "todd"]
const arr2 = ["jane", "paige", "rachel"]

// arr1.push(arr2) // the push operation treats the arr2 as an element and pushes it at index 3
// push doesn't return an array
// console.log(arr1);

// arr1.concat(arr2)
// console.log(arr1); // the arr1 is not modified

// console.log(arr1.concat(arr2)) // it prints the entire mereged array

// concat is used to combine two or more arrays. This method returns a new array without modifying any existing arrays.
// const arr3 = arr1.concat(arr2)
// console.log(arr3);

// ************************* spread operator *************************************
const newArr = [...arr1, ...arr2]
console.log(newArr);

const nums = [1, 2, 3, 4, [3, 5, 6], 7, [31, 21], [11, 23, [23, 52]]]
const flattened_array = nums.flat(3) // the flat method parameter - The maximum recursion depth
// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(flattened_array);

// const array  = nums.flat(Infinity) // passing Infinity can flattend upto any depth but genrally it is recommended to specify the depth to which we want to flatten our array
