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

// Write a function that takes in an object and a key, and returns the value of that key. If the key does not exist, the function should return a default value.
console.log("takes in an object and a key, and returns the value")
function returnsKey(key, object) {
    if (object[key] == null)
        return "no value"
    else
        return object[key]
}

console.log(returnsKey("name", object))
console.log("--------------------------")

// Write a function that takes in an object and a key, and renames that key in the object.
console.log("takes in an object and a key, and renames that key")
function renameKey(oldKey, newKey, object) {
    let newobject = {}
    for (key in object) {
        if (key == oldKey)
            newobject[newKey] = object[oldKey]
        else
            newobject[key] = object[key]
    }
    return newobject
}

console.log(renameKey("skills", "habits", object))
console.log("--------------------------")

// Write a function that takes in an object and a key, and returns true if the value associated with that key is a function and false otherwise.
console.log("returns true if the value associated with that key is a function")
function returnsKey(key, object) {
    if (typeof (object[key]) == 'function')
        return true
    return false
}

console.log("true if its a function :" + returnsKey("eat", object))
console.log("--------------------------")
// Write a function that takes in an object and returns a new object that only includes the key-value pairs where the key is a string of a specific length.
console.log("returns a new object that only includes the key-value pairs where the key is a string of a specific length.")
let len = 3
function limitedlenghtKey(object, len) {
    let newobject = {}
    for (key in object) {
        if (key.length > len)
            newobject[key] = object[key]
    }
    return newobject
}

console.log(`returns keys with ${len} letters `, limitedlenghtKey(object, len))
console.log("--------------------------")

// Write a function that takes in an object and returns a new object that only includes the key-value pairs where the value is a number that is within a specific range.

// Write a function that takes in an object and a key, and returns the number of characters in the value of that key.
console.log("returns the number of characters in the value of that key.")
function numOfCharactersKey(key, object) {
    return object[key].length
}

console.log("number of characters in the value of that key " + numOfCharactersKey("name", object))
console.log("--------------------------")

// Write a function that takes in an object and an array of keys, and returns a new object that only includes the key-value pairs where the key is not in the array.
console.log("delete key")
let toDelete = "skills"
function deleteKey(delKey, object) {
    let newobject = {}
    for (key in object) {
        if (key == delKey)
            continue
        newobject[key] = object[key]
    }
    return newobject
}

console.log("delete "+toDelete+ 'results =>')
console.log(deleteKey(toDelete,object))
// Hard tasks
// Write a function that takes in an object and returns a new object with all its values as functions that when called, return the original value.
// Write a function that takes in an object, and returns a new object with all its key-value pairs sorted by the length of the keys.
// Write a function that takes in an object and a key, and returns the value of that key. If the key does not exist, the function should return the value of the nearest key in alphabetical order.