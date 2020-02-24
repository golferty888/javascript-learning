var max = process.argv[2] || 100

isFizz = (num) => {
    if (num%3 == 0) {
        return true
    }
    return false
}

isBuzz = (num) => {
    if (num%5 == 0) {
        return true
    }
    return false
} 

isFizzBuzz = (num) => {
    if (isFizz(num) && isBuzz(num)) {
        return true
    }
    return false
}

startFizzBuzz = (max) => {
    let arrFizzBuzz = []

    for (let i = 1; i <= max; i++) {
        if (isFizzBuzz(i)) {
            console.log("FizzBuzz")
            arrFizzBuzz.push("FizzBuzz")
            // return "FizzBuzz"
        } else if (isFizz(i)) {
            console.log("Fizz")
            arrFizzBuzz.push("Fizz")
            // return "Fizz"
        } else if (isBuzz(i)) {
            console.log("Buzz")
            arrFizzBuzz.push("Buzz")
            // return "Buzz"
        } else {
            console.log(i)
            arrFizzBuzz.push(i)
            // return i
        }
    }
    return arrFizzBuzz
}

startFizzBuzz(max)

module.exports = startFizzBuzz