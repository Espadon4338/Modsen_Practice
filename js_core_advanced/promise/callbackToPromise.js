function callbackToPromise(original) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            original.call(this, ...args, (error, ...results) => {
                if (error) {
                    reject(error)
                } else {
                    if (results.length === 1) {
                        resolve(results[0])
                    } else {
                        resolve(results)
                    }
                }
            })
        })
    }
}