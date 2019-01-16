/**
 * A function that filters banned words from a String object.
 * It is implemented using async/await.
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

async function testFilter(str="", arr=[]) {
    try {
        console.log("Before filtering");
        console.log(str);
        let result = await str.filterWords(arr);
        console.log("After filtering");
        console.log(result);
    } catch (error) {
        console.log(error);
    }
    console.log("Test: when does this print");
}

testFilter("This house is nice!", ['house', 'nice']);
console.log("Finish");

