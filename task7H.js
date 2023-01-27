// Create a function that takes in a number as an argument and returns the number of trailing zeroes in its factorial using recursion.
let num = 10
console.log("returns the number of trailing zeroes in its factorial")
function trailingZeros(num) {
    function factRecurssion(num) {
        if (num <= 1)
            return 1
        return num * factRecurssion(num - 1)
    }

    function countingZeros(num, count = 0) {
        if (num % 10 != 0) {
            return count
        }
        return countingZeros(num / 10, count+1)
    }
    return countingZeros(factRecurssion(num))
}
console.log(`trailing zeros of ${num} is ${trailingZeros(num)}`)
console.log()

// Create a function that takes in a number n as an argument and returns the result of raising it to a power p using recursion.
console.log("takes in a number n as an argument and returns the result of raising it to a power p")
let p =3
function powerP(n,p){
    if(p<=1){
        return n
    }
    return powerP(n,p-1)*n
}
console.log(`${num} to  the power ${p} is ${powerP(num,p)}`)

// Create a function that takes in a number and a callback function as an argument, then calls the callback function with the result of the number squared,
// passed through another callback function that takes the result and returns true if the number is even, and false if odd


// Create a function that takes in a string and a callback function as an argument, then calls the callback function with the result of the string reversed,
//passed through another callback function that takes the result and returns the number of vowels in the string.