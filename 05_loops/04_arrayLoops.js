const nums = ["jk", "ak", "bk", "ck", "dk", "vk"]

nums.forEach(function (item){ // a callback function has no name
    // console.log(item);
})

nums.forEach((item) => { // the callback function can be an arrow function as well
    // console.log(item);
    
})

function printMe(item){
    // console.log(item);
}

// nums.forEach(printMe) // a reference to any function can also be passed which is defined somewhere else in the file

nums.forEach((item, index, arr ) => { // the function can take parameters as item, index, array
// console.log(item, index, arr);

})

// loops on array of objects

const arrOfObj = [
    {
        language: "javascript",
        extension: "js"
    },

    {
        language: "java",
        extension: "java"
    },

    {
        language: "python",
        extension: "py"
    }
]

arrOfObj.forEach( (item) => {
    console.log(`Extension used for ${item.language} is ${item.extension}`);
    
}) 