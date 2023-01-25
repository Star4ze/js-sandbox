//1. Create a program that generates the first n prime numbers. A prime number is a number thais divisible by only 1 and itself.
n = 10
console.log("the first " + n + " prime numbers")
i = 1
let j = 2
let isPrime = true
console.log(2)
while (i < n) {
    j++
    if (j % 2 == 1) {
        for (let k = 3; k < (j / 2); k += 2) {
            if ((j % k) == 0)
                isPrime = false
            break
        }
    } else
        isPrime = false
    if (isPrime) {
        console.log(j)
        i++
    }
    isPrime = true
}

console.log("-----------------------------------------")

// 2. Create a program that finds the greatest common divisor (GCD) of two numbers using the
let num1 = 60
let num2 = 40
let remainder
if (num1 < num2)       //find biggest number
    remainder = num2 % num1
else
    remainder = num1 % num2

console.log("GCD of " + num1 + " and " + num2 + " is " + remainder)

console.log("-----------------------------------------")

// 3. Create a program that calculates the nth number in the Lucas series.
n = 10
console.log("first " + n + " numbers in the Lucas Series")
let f1 = 1    //starting number
let f2 = 2    //second number
console.log(f1)
for (let i = 0; i < n; i++) { //assign i to count the number of loops
    let temp = f2   //temparory variable to keep the second number
    f2 = f1 + f2
    f1 = temp
    console.log(f1)
}

console.log("-----------------------------------------")

// 4. Create a program that calculates the sum of the squares of the first n natural numbers.
n = 10
let ans = 0
for (let i = 1; i <= n; i++) {
    ans += i ** 2
}
console.log("sum of the squares of the first " + n + " natural numbers is " + ans)

console.log("-----------------------------------------")

// 5. Create a program that generates a sequence of the first n number in the look-and-say
n = 5
console.log("sequence of the first " + n + " number in the look-and-say")
num = "1"
let count = 1
ans = ""

for (let i = 1; i <= n; i++) {
    for (let j = 0; j < num.length; j++) {
        if (num[j] != num[j + 1]) {
            ans = ans + count + num[j]
            count = 1
        }
        else
            count++
    }
    num = ans
    ans = ""
    console.log(num)
}

// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, one 1" or 1211.
// 1211 is read off as "one 1, one 2, two 1s" or 111221.
// 111221 is read off as "three 1s, two 2s, one 1" or 312211.