const { of, from, Observable} = require('rxjs');

/**
 * A function that filters banned words from a String object.
 * It is implemented using observable.
 */
String.prototype.filterWords = function (words = []) {

    let modifiedString = this.valueOf();
    words.map(word => {
        modifiedString = modifiedString.replace(word, "***");
    });
    
    // const obs$ = Observable.create(function(observer){
    //     observer.next(modifiedString);
    //     setTimeout(() => {observer.complete();}, 1000);
    // });

    let filterPromise =  new Promise(function (resolve, reject) {
        if (modifiedString) {
            resolve(modifiedString);
        } else {
            reject("Error");
        }
    });
    const obs$ = from(filterPromise);

    return obs$;
}

let testFilter = function(str="", arr=[]) {
    str.filterWords(arr).subscribe(
        (x) => console.log(x),
        () => console.log("Error"),
        () => console.log("Done")
    );
};

testFilter("This house is nice!", ['house', 'nice']);
console.log("Finish");

