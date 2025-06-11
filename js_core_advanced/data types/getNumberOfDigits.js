function getNumberOfDigits(number) {
    let result = 0
    while (number > 0) {
        number = Math.floor(number / 10)
        result++
    }

    return result;
}

const number = 12345
console.log(`Count of digits in '${number}' number is ${getNumberOfDigits(number)}`)