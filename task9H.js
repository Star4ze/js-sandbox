let object = {
    name: "paimon",
    age: 7,
    type: "emegancy food",
    eat: () => { console.log("nom nom nom") },
    skills: [{
        name: "flying",
        level: 5
    },
    {
        name: "eating",
        level: 5
    }, {
        name: "knoweledge",
        level: 0
    }]
}


// Hard tasks
// Write a function that takes in an object and returns a new object with all its values as functions that when called, return the original value.

console.log("returns a new object with all its values as functions that when called")
function funcCreator(object) {
    let newobject = {}
    for (key in object) {
        if (typeof (object[key]) == 'function')
            newobject[key] = object[key]
        else {
             newobject[key] = () => object[key]
             //newobject[key] = function key() { return object[key] }
        }
    }
    return newobject
}
let newobject = funcCreator(object)
console.log(newobject.age)
console.log("--------------------------")

// Write a function that takes in an object, and returns a new object with all its key-value pairs sorted by the length of the keys.

// console.log("returns a new object with all its key-value pairs sorted by the length of the keys.")

// function sortingobjects(object) {
//     let array = []
//     for (key in object)
//         array.push(key)

//     let temp
//     console.log(array)
//     for (i = array.length - 1; i >= 0; i--) {
//         for (j = 0; j < i; j++) {
//             if (array[j].length > array[j + 1].length) {
//                 temp = array[j]
//                 array[j] = array[j + 1]
//                 array[j + 1] = array
//             }
//         }
//     }
//     console.log(array)
// }
// sortingobjects(object)
// console.log("-------------------------------")


// Write a function that takes in an object and a key, and returns the value of that key. If the key does not exist, the function should return the value of the nearest key in alphabetical order.