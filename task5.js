// Task1: Print out all characters of a string
let strings = "lorem"
console.log("all characters of a " + strings)
for (let s of strings) {
    console.log(s)
}

console.log("---------------------------")

// Task2: Print out all characters of a string in reversed order
console.log(strings + " in reversed order")
for (let i = strings.length - 1; i >= 0; i--) {
    console.log(strings[i])
}

console.log("-----------------------------")

// Task3: Write a program, that reverts a string
console.log("program, that reverts a string")
let ans = ""
for (let i = strings.length - 1; i >= 0; i--) {
    ans += strings[i]
}
console.log("reverse of " + strings + " is " + ans)

console.log("------------------------------")

// Task4: Write a program, that detects palindromes
console.log("program, that detects palindromes")
let palindrome = "racecar"
let isPalindromes = true
let lenOfWord = palindrome.length
for (let i = 0; i < lenOfWord / 2; i++) {
    if (palindrome[i] != palindrome[lenOfWord - i - 1]) {
        isPalindromes = false
        break
    }
}
if (isPalindromes)
    console.log("word " + palindrome + " is a palindrome")
else
    console.log("word " + palindrome + " not a palindrome")

console.log("-------------------------------")
/*
// Task5: Write a program, that counts how often each character is included in a string
console.log("counts how often each character is included in a string")
let a = 0; let b = 0; let c = 0; let d = 0; let e = 0; let f = 0; let g = 0; let h = 0;
let i = 0; let j = 0; let k = 0; let l = 0; let m = 0; let n = 0; let o = 0; let p = 0;
let q = 0; let r = 0; let s = 0; let t = 0; let u = 0; let v = 0; let w = 0; let x = 0;
let y = 0; let z = 0

for (let xx in strings) {
    switch (xx) {
        case "a":
            a++;
            break;
        case "b":
            b++;
            break;
    }
}
method looks stupid :/
*/

console.log("-------------------------------")

// Task6: Write a number, that prints out the first n characters of a string only
let n = 3
console.log("first " + n + " of " + strings + " is " + strings.substring(0, n))

console.log("-------------------------------")

// Task7: Write a program, that concatinates a given string n times
console.log("concatinates a " + strings + " " + n + " times")
ans = ""
for (let x = 0; x < 3; x++) {
    ans = ans.concat('', strings)
}
console.log(ans)

console.log("-------------------------------")
// Task8: Write a program, that inserts a character into a string at a given position
let char = "Z"
n = 2
console.log("inserts a " + char + " into a string at a given position")
strings = strings.slice(0, n) + "Z" + strings.slice(n);
console.log(strings) 