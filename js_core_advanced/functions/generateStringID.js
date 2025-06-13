function generateStringID(length) {
    let result = ''
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (let i = 0; i < length; i++) {
        let randIndex = Math.floor(Math.random() * charset.length)
        result += charset[randIndex]
    }

    return result
}

console.log(generateStringID(16))