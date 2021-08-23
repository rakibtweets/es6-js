const numbers = [34,76,235,542,56,12];
// console.log(numbers)

// speade operator(...) use to bring all the array elements as numbers or strings.
// array er protteka elements k spead oparator diye niye asha hoy
// console.log(...numbers)

// finding max number using math function

const maxNum = Math.max(23,43,12);
// console.log(maxNum)
const maxInArrayNaN = Math.max(numbers) // outpur NaN
// using spead oparator(...) we bring all the values of an array
const maxInArray = Math.max(...numbers) // output biggest number of array
// console.log(maxInArray)

// numbers.push(55)
// console.log(numbers) // ager numbers a push hobe beacuse of reference variable

// what is reference variable?
/* => jodi ekta variable er value amra onno arekta variable a boshai tokhon new variable first variable theke reference ney. 
 */

// pushing new  numbers in an array
const newNumbers =[34,234,...numbers,65,70];
newNumbers.push(45)
console.log(newNumbers) 
