// Write a program that checks if a given string contains any duplicate characters.

// Write a program that replaces all occurrences of a given character with another character in a given string.
console.log("replaces all occurrences of a given character with another character in a given string.")
let string = "doremifasolatido"
let replace = "a"
let _with = "z"
console.log(string + "'s '" + replace + "' are replace with " + _with)
for (let i = 0; i < string.length; i++) {
    if (replace == string[i]) {
        string = string.slice(0, i) + _with + string.slice(i + 1);
    }
}
console.log(string)

console.log("-------------------------------")


// Write a program that removes all vowels from a given string.

console.log("removes all vowels from a given string.")
string = "doremifasolatido"

console.log("before " + string)

for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
        case "a":
            string = string.replace('a', '');
            break;
        case "e":
            string = string.replace('e', '');
            break;
        case "i":
            string = string.replace('i', '');
            break;
        case "o":
            string = string.replace('o', '');
            break;
        case "u":
            string = string.replace('u', '');
            break;
    }
}

console.log("after " + string)
// Write a program that checks if a given string is a pangram (a sentence that contains every letter of the alphabet at least once).
// Write a program that finds the first non-repeated character in a given string.
// Write a program that finds the longest substring without repeating characters in a given string.