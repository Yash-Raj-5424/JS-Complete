const appUser = new Object() // this is how objects are created using a constructor and it is a singleton object

const user1 = { // a non-singleton object
    name : "jack",
    id : 124
}

const tinderUser = {}

tinderUser.name = "gale"
tinderUser.id = 234
tinderUser.isLoggedIn = false


// objects containig objects. There can be any level of nesting in objects 
const regularUser = {
    email : "abc@gmail.com",
    username : {
        fullname: {
            firstName : "Michael",
            lastName : "Erhmentraught"
        }
    }
}

// Accessing objects inside objects
// console.log(regularUser.username.fullname.lastName);

// Merging two objects 
const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3: "m", 4: "n"}
const obj3 = {5: "p", 6: "q"}

// const mergedObj = {obj1, obj2, obj3} // creates a object whose properties are obj1, obj2, obj3 but does not merge the objects

// console.log(mergedObj); 

// const  mergeDemo = Object.assign( obj1, obj2, obj3) // this merges the three objects and copies the values of properties from obj2 and obj3 into the obj1 which tends to modify the obj1 and returns obj1

// console.log(mergeDemo == obj1); // returns true as the obj1 has been modified 

const merge = Object.assign({}, obj1, obj2, obj3) // this creates a new object and copies the obj1, obj2, obj3 in the new object and returns it. None of the objects are modified
// console.log(merge);

// MERGING THE OBJECTS USING SPREAD (...) OPERATOR

const mergeBySpread = {... obj1, ...obj2, ...obj3}
// console.log(mergeBySpread);

// the objects which come from the database, come in the form of ARRAY OF OBJECTS 

const arrObj = [
    {
        id: 5323,
        email: "jds@gmail.com"
    },
    {
        id: 5323,
        email: "jds@gmail.com"
    },
    {
        id: 5323,
        email: "jds@gmail.com"
    },
]
// Accessing the properties of objects from the object array
// console.log(arrObj[0].email);

// console.log(tinderUser);

// Accessing the keys and values of an objects 

// console.log(Object.keys(tinderUser)); // it takes all the keys of the object and stores it in the array and returns the array
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // returns an array of arrays which contains the properties (keys and values) of the objects

console.log(tinderUser.hasOwnProperty('id')); // to check whether a particular property exists in the object


