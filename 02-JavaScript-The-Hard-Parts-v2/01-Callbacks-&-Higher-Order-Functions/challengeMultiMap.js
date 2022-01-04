/*
Challenge: multiMap
Construct a function multiMap that will accept two arrays - an array of values and an array of callbacks.
multiMap will return an object whose keys match the elements in the array of values. The corresponding values
that are assigned to the keys will be arrays consisting of outputs from the array of callbacks,
where the input to each callback is the key.
 */

// ADD CODE HERE
function multiMap(items, callbacks) {
    const obj = {};
    for (let i = 0; i < items.length; i++) {
        obj[items[i]] = []
        for (let j = 0; j < callbacks.length; j++) {
            obj[items[i]].push(callbacks[j](items[i]));
        }
    }
    return obj;
}

// Uncomment these to check your work!
function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater(str) { return str + str; }
const items = ['catfood', 'glue', 'beer'];
const functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'],
                                        // glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
