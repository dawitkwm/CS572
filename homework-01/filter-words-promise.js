/**
 * A function that filters banned words from a String object.
 * It is implemented using promise.
 */
String.prototype.filterWords = function (words = []) {

    let modifiedString = this.valueOf();
    words.map(word => {
        modifiedString = modifiedString.replace(word, "***");
    });

    return new Promise(function (resolve, reject) {


        if (modifiedString) {
            resolve(modifiedString);
        } else {
            reject("Error");
        }
    });
}

"This house is nice!".filterWords(['house', 'nice'])
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.log(error);
    });