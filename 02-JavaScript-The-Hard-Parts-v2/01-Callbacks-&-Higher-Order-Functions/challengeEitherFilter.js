/*
Challenge: eitherFilter

Add code to the function eitherFilter in the place marked "ADD CODE HERE" in order to achieve the desired console logs.
The array returned from eitherFilter should contain all elements in the passed-in array that yield a truthy return value
when passed into EITHER of the two callbacks passed into eitherFilter.
 */

function eitherFilter(array, callback1, callback2) {
    // ADD CODE HERE
    const res = [];
    for (let i = 0; i < array.length; i++) {
        if (callback1(array[i])) {
            res.push(array[i]);
        } else if (callback2(array[i])) {
            res.push(array[i]);
        }
    }
    return res;
}

// Uncomment these to check your work!
const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
const over100 = n => n > 100;
console.log(eitherFilter(arrOfNums, integerSquareRoot, over100)); // should log: [105, 9]