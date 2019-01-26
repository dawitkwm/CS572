/**
 * A function that filters even numbers from a an array of numbers.
 * It is implemented using prototype property on Array object, for of iterator, 
 * and a Promise with arrow function
 */
Array.prototype.even = function () {
    let evenArray = []; 
    for (const a of this) {
        if ((a % 2) === 0) {
            evenArray.push(a);
        }
    }
    return new Promise((resolve) => resolve(evenArray));
}

/**
 * A function that filters odd numbers from a an array of numbers.
 * It is implemented using prototype property on Array object, map method, 
 * and a Promise with arrow function
 */
Array.prototype.odd = function () {
    let oddArray = [];
    this.map(a => {
        if ((a % 2) !== 0) {
            oddArray.push(a);
        }
    });
    return new Promise((resolve, reject) => {
        oddArray ? resolve(oddArray) : reject("Error");
    });
}



//Tests
console.log("start");

[1, 2, 3, 4, 5, 6, 7, 8].even()
    .then(function (result) {
        console.log(result);
    });

[1, 2, 3, 4, 5, 6, 7, 8].odd()
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });

console.log("end");