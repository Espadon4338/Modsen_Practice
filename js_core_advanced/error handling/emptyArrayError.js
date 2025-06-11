function checkArray (array) {
    if (typeof array === "undefined" || typeof array === "null" || array.length == 0)
        throw new Error("The array is empty, null or undefined")
}

checkArray(a)

var a