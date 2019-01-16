
/**
 * A function that filters banned words from a String object.
 * It is implemented using prototype property, map method, and arrow function
 */

String.prototype.filterWords = function(words=[]) {
    let modifiedString = this.valueOf();
    words.map(word =>
        {modifiedString = modifiedString.replace(word, "***");}
    );
    return modifiedString;
}

console.log("This house is nice!".filterWords(['house', 'nice']));
console.log("Finish");
