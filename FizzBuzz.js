for (let i = 0; i < 20; i++) {

    if (i % 3 == 0) {
        if (i % 5 == 0) {
            console.log("Fizz buzz")
            continue
        } else {
            console.log("Fizz")
            continue
        }
    } else if (i % 5 == 0) {
        console.log("buzz")
        continue
    }
    console.log(i)

}