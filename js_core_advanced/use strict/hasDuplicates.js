"use strict";

function hasDuplicates(array) {
    return new Set(array).size != array.length;
}

let arr = [1, 2, 3, 4, 4];
console.log(hasDuplicates(arr));