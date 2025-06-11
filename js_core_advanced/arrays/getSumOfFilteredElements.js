function getSumOfFilteredElements(array) {
    let result = 0
    for (let number of array) {
        if (number > 0 && number < 10) result += number
    }

    return result;
}

const arr = [1, -1, 3, 6, 11]
console.log(`The sum of filtered elements equal to ${getSumOfFilteredElements(arr)}`)