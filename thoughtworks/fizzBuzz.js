var max = process.argv[2] || 100

console.log("Max is:", max)

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
    for (let i = 0; i < max; i++) {
        if (isFizzBuzz(i)) {
            console.log("FizzBuzz")
        } else if (isFizz(i)) {
            console.log("Fizz")
        } else if (isBuzz(i)) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

startFizzBuzz(max)