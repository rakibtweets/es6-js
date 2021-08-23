// array mapping
/* 
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

Meaning: manupulating array elements in new array

*/

const numbers = [45,32,76,86,43];

// pass a function to map
const newArr = numbers.map(x=> x + 2);
const sqrt = numbers.map(x => x * x);
console.log(sqrt)