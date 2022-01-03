/*
Challenge: intersection
Construct a function intersection that compares input arrays
and returns a new array with elements found in all of the inputs. BONUS - Use reduce!
*/

// ADD CODE HERE
function intersection(arrays) {
    let accumulator = arrays.shift();
    let newArray = [];
    for (let i = 0; i < arrays.length; i++) {
        let currentArray = arrays.shift();
        currentArray.forEach(n => {
            if (accumulator.includes(n)) newArray.push(n);
        });
        accumulator = newArray;
    }

    let temp = [];
    for (let i = 0; i < accumulator.length; i++) {
        for (let j = i + 1; j < accumulator.length; j++) {
            if (accumulator[i] === accumulator[j]) temp.push(accumulator[j]);
        }
    }

    return temp.length > 0 ? temp : accumulator;
}
// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]