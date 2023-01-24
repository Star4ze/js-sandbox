//simple calculator that can perform basic arithmetic operations

let no1 = 10
console.log("number 1 :" + no1)
let no2 = 5
console.log("number 2 :" + no2)
let op = '*'

if (op == '+') {
console.log("addition is :" + (no1 + no2))
} else if (op == '-') {
console.log("Subtaaction is :" + (no1 - no2))
} else if (op == '*') {
console.log("multiplication is :" + (no1 * no2))
} else if (op == '/') {
console.log("devision is :" + (no1 / no2))
}


console.log("-----------------------------------")
//converts a temperature from Fahrenheit to Celsius.

let tempInFahrenheit = 70
console.log("when" + tempInFahrenheit + "F")
let tempInCelcius = (tempInFahrenheit - 32) * 5 / 9

console.log("Temperature is :" + tempInCelcius)

console.log("-----------------------------------")
//determines whether a given number is odd or even

let no = 65

console.log("when " + no + " is")

if (no % 2 == 0) {
    console.log("even")
} else {
    console.log("odd")
}

console.log("-----------------------------------")
//program that takes in a person's age and name and prints out a message that says whether they are old enough to vote.
let age = 21

console.log("if your at age :" + age)

if (age < 18) {
    console.log("Your NOT old enough to vote")
} else {
    console.log("your old enough to vote")
}

console.log("-----------------------------------")
// calculates the area of a triangle given the lengths of its
let side1 = 2
let side2 = 3
let side3 = 5

height = Math.sqrt(side1 ** 2 + side2 ** 2)

console.log("area of the traingle : " + (height * side3 / 2))

console.log("-----------------------------------")


// 6. Create a program that takes in two numbers and checks whether the first
// number is divisible by the second number or not.

no1 = 25
no2 = 5

if (no2==0){
    console.log(no1 + " is not divisable by "+no2)
} else{
    console.log(no1 + " is divisable by "+no2)
}