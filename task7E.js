let num1 = 124
let num2 = 321
// Create a function that takes in two numbers as arguments and returns the result of adding them together.
console.log("takes in two numbers and add them")
function sum(num1, num2) {
    return num1 + num2
}
console.log(`${num1} + ${num2} = ${sum(num1, num2)}`)
console.log()

// Create a function that takes in a string as an argument and returns the number of vowels in the string using a loop.
let string = "shaka boom"
console.log("number of vowels in a string")
function countVowels(string) {
    let count = 0
    for (let i = 0; i < string.length; i++) {
        c = string.charAt(i)
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c =='u') {
            count++
        }
    }
    return count
}
console.log(`${string} has ${countVowels(string)} vowels`)
console.log()

// Create a function that takes in a number and returns the result of raising it to the power of 3.
let num = 9
console.log("power of 3")
function powerOf3(num) {
    return num ** 3
}
console.log(`${num} power of 3 is ${powerOf3(num)}`)
console.log()

// Create a function that takes in a number as an argument and returns true if it is even and false if it is odd.
console.log('returns true if it is even and false if it is odd')
function isEven(num) {
    return (num % 2 == 0)
}
console.log(`${num} returns ${isEven(num)}`)
console.log()

// Create a function that takes in a string as an argument and returns the string with all the characters in reverse order.
console.log("reverse a string")
function reverseString(string) {
    let reversed = ""
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string.charAt(i)
    }
    return reversed
}
console.log(`${string} reverse is ${reverseString(string)}`)
console.log()

// Create a function that takes in two numbers as arguments, and using a loop, returns the result of multiplying them together.
console.log("multiplying first num with second")
function multiply(num1, num2) {
    let ans = 0
    for (let i = 0; i < num2; i++) {
        ans += num1
    }
    return ans
}
console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`)
console.log()

// Create a function that takes in an numbers and using a loop, returns the sum of all the numbers.
console.log("sum of all the numbers")
function sumOfNumbers(num) {
    let ans = 0
    for (let i = 1; i <= num; i++) {
        ans += i
    }
    return ans
}
console.log(`sum of all the numbers in ${num} is ${sumOfNumbers(num)}`)
console.log()

// Create a function that takes in a number as an argument and returns the result of finding the square root of that number.
console.log("square root of that number.")
function squareRoot(num) {
    return Math.sqrt(num)
}
console.log(`square root of ${num} is ${squareRoot(num)}.`)
console.log()

// Create a function that takes in a string as an argument and returns true if it is a palindrome, and false if it is not.
console.log("returns true if it is a palindrome, and false if it is not.")
function isPalindromes(string) {
    let isPalindrome = true
    let lenOfWord = string.length
    for (let i = 0; i < lenOfWord / 2; i++) {
        if (string[i] != string[lenOfWord - i - 1]) {
            isPalindrome = false
            break
        }
    }
    return isPalindrome
}
console.log(`for word ${string} is ${isPalindromes(string)}`)
string = "aabcbaa"
console.log(`for word ${string} is ${isPalindromes(string)}`)
console.log()

// Create a function that takes in a number as an argument and returns the result of finding the factorial of that number.
console.log("factorial of that number")
function factorial(num) {
    let ans = 1
    for (let i = 1; i <= num; i++) {
        ans *= i
    }
    return ans
}
console.log(`factorial of ${num} is ${factorial(num)}`)
console.log()

// Create a function that takes in a number n as an argument and returns the result of finding the nth number in the Fibonacci sequence using recursion.
console.log("sum ofFibonacci sequence using recursion")
function fibonacci(num) {
    if (num <= 2)
        return 1
    return fibonacci(num - 2) + fibonacci(num - 1)
}
console.log(`sum of Fibonacci sequence until ${num} is ${fibonacci(num)}`)
console.log()

// Create a function that takes in a number as an argument and returns the factorial of that number using recursion.
console.log("factorial of a number using recursion.")
function factRecurssion(num) {
    if (num <= 1)
        return 1
    return num * factRecurssion(num - 1)
}
console.log(`factorial of ${num} is ${factRecurssion(num)}`)
console.log()

// Create a function that takes in a number and a function as an argument, then calls the provided function with the result of the number multiplied by 2.
console.log("function that takes in a number and a function as an argument")
function function1(num, func) {
    return func(num * 2)
}

function function2(num){
    return `function 2 called with  ${num}`
}

console.log(function1(5,function2))
console.log()