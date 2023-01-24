// 1. Create a program that uses a for loop to print out the numbers 1 to 10.
console.log("print out the numbers 1 to 10")
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// 2. Write a program that uses a while loop to print out the numbers 1 to 10 in reverse order.
console.log("print out the numbers 10 to 1")
i = 10
while (i > 0) {
    console.log(i)
    i--
}

// 3. Create a program that uses a for loop to print out the first 10 even numbers.
console.log("first 10 even numbers")
for (let i = 0; i < 20; i += 2) {
    console.log(i)
}

// 4. Write a program that uses a while loop to calculate the sum of numbers from 1 to 100.
i = 1
let x = 0
while (i <= 100) {
    x += i
    i++
}
console.log("sum of numbers from 1 to 100 is " + x)

// 5. Create a program that uses a for loop to print out the first 10 odd numbers.
console.log("first 10 odd numbers")
for (let i = 1; i < 20; i += 2) {
    console.log(i)
}

// 6. Create a program that uses a for loop to print out the first 10 numbers in the Fibonacci sequence.

console.log("first 10 numbers in the Fibonacci sequence.")
let f1 = 0    //starting number
let f2 = 1    //second number
console.log(f1)
for (let i = 0; i < 10; i++) { //assign i to count the number of loops
    let f3 = f2   //temparory variable to keep the second number
    f2 = f1 + f2
    f1 = f3
    console.log(f1)
}

// 7. Write a program that uses a while loop to print out the first 10 prime numbers.
console.log("the first 10 prime numbers")
i = 0
let j = 2
let isPrime = true
console.log(2)
while (i < 10) {
    j++
    if (j % 2 == 1) {
        for (let k = 3; k < (j / 2) + 1; k += 2) {
            if ((j % k) == 0)
            isPrime= false
                break
        }        
    } else
        isPrime = false
    if(isPrime){
        console.log(j)
        i++
    }
    isPrime= true
}

// 8. Write a program that uses a while loop to calculate the factorial of a given number

i = 1
let num = 10
let ans = 1
while (i < num) {
    ans *= i
    i++
}
console.log("factorial of a given number: " + num)
console.log(ans)