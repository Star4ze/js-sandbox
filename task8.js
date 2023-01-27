let numbers = [12, 65, 32, 87, 56, 32, 41]
// Write a function that takes in an array of numbers and returns the sum of all the numbers in the array.
console.log("returns the sum of all the numbers")

function sumofArrays(numbers) {
    return numbers.reduce((acc, curr) => acc + curr)
}
console.log(`sum of ${numbers} is => ${sumofArrays(numbers)}`)

console.log("-------------------------------")

// Write a function that takes in an array of numbers and returns the largest number in the array.
console.log("the largest number in the array")
function maxofArrays(numbers) {
    return numbers.reduce((acc, curr) => {
        if (acc < curr)
            return curr
        else
            return acc
    })
}
console.log(`max of ${numbers} is => ${maxofArrays(numbers)}`)
console.log("-------------------------------")

// Write a function that takes in an array of numbers and returns the smallest number in the array.
console.log("the smallest number in the array")
function minofArrays(numbers) {
    return numbers.reduce((acc, curr) => {
        if (acc < curr)
            return acc
        else
            return curr
    })
}
console.log(`min of ${numbers} is => ${minofArrays(numbers)}`)
console.log("-------------------------------")

// Write a function that takes in an array of numbers and returns the average of all the numbers in the array.
console.log("the average number in the array")
function averageofArrays(numbers) {
    return (numbers.reduce((acc, curr) => acc + curr) / numbers.length)
}
console.log(`average of ${numbers} is => ${averageofArrays(numbers)}`)
console.log("-------------------------------")

// Write a function that takes in an array of numbers and returns a new array of only the even numbers.
console.log("returns a new array of only the even numbers.")
function evensofArrays(numbers) {
    let evens = []
    for (let num of numbers) {
        if (num % 2 == 0) {
            evens.push(num)
        }
    }
    return evens
}
console.log(`evens of ${numbers} is => ${evensofArrays(numbers)}`)
console.log("-------------------------------")

// Write a function that takes in an array of numbers and returns a new array of only the odd numbers.
console.log("returns a new array of only the odd numbers.")
function oddsofArrays(numbers) {
    let odds = []
    for (let num of numbers) {
        if (num % 2 != 0) {
            odds.push(num)
        }
    }
    return odds
}
console.log(`odds of ${numbers} is => ${oddsofArrays(numbers)}`)
console.log("-------------------------------")


// Write a function that takes in an array of numbers and returns the index of the first occurrence of a specific number.
console.log("returns the index of the first occurrence of a specific number.")
let num = 32

function firstOccuranceOfArrays(num, numbers) {
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] == num)
            return i
    }
    return "not found"
}
console.log(`first occurance of ${num} in array ${numbers} is at => ${firstOccuranceOfArrays(num, numbers)}`)
console.log("-------------------------------")

// Write a function that takes in an array of numbers and returns the index of the last occurrence of a specific number.
console.log("returns the index of the last occurrence of a specific number.")
function lastOccuranceOfArrays(num, numbers) {
    for (i = numbers.length - 1; i >= 0; i--) {
        if (numbers[i] == num)
            return i
    }
    return "not found"
}
console.log(`last occurance of ${num} in array ${numbers} is at => ${lastOccuranceOfArrays(num, numbers)}`)
console.log("-------------------------------")

// Write a function that takes in an array of numbers and returns a new array of numbers that are in sorted order.
console.log("sorting arrays")
function sortingArrays(numbers) {
    let temp = 0
    for (i = numbers.length - 1; i >= 0; i--) {     //used bubble sort
        for (j = 0; j < i; j++) {
            if (numbers[j] > numbers[j + 1]) {
                temp = numbers[j]
                numbers[j] = numbers[j + 1]
                numbers[j + 1] = temp
            }
        }
    }
    return numbers
}
console.log(`sorted array of ${numbers} is => ${sortingArrays(numbers)}`)
console.log("-------------------------------")

// Write a function that takes in an array of numbers and returns a new array of numbers that are in reverse sorted order.
console.log("sorting arrays reverse")
function sortingReverseArrays(numbers) {
    let temp = 0
    for (i = 0; i < numbers.length; i++) {     //used bubble sort
        for (j = i; j >= 0; j--) {
            if (numbers[j] < numbers[j + 1]) {
                temp = numbers[j]
                numbers[j] = numbers[j + 1]
                numbers[j + 1] = temp
            }
        }
    }
    return numbers
}
console.log(`sorted reverse array of ${numbers} is => ${sortingReverseArrays(numbers)}`)


// Hard tasks:
// Write a function that takes an array of integers and returns the sum of the two largest numbers in the array.
// Write a function that takes an array of integers and returns the second smallest number in the array.
// Write a function that takes an array of integers and returns an array of the unique integers.
// Write a function that takes two arrays and returns an array of all elements that exist in both arrays.
// Write a function that takes an array of integers and returns the majority element (the element that appears more than half the time).
// Write a function that takes an array of integers and returns an array of all the possible subsets of that array.