/* 
what is array filter() method => array filter method provide a new array according to its match function.
*/

const numbers = [1,2,3,4,5,6,7,,8,9,10,11,13,15,12,19,15];
const oddNumbers = numbers.filter(n => n % 2 == 1)
const evenNumbers = numbers.filter(n => n % 2 == 0)
// console.log(oddNumbers)
// console.log(evenNumbers)