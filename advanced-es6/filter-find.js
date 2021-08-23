// filter 
/* 
The filter() method creates a new array with all elements that pass the test implemented by the provided function.
*/
const numbers = [32,23,53,56,87,65];
const bigNumbers = numbers.filter(n => n > 35)

const smallNumbers = numbers.filter(n => n < 50)

// console.log(bigNumbers, smallNumbers)

const products = [
    {name: 'Water bottle',price:50, color:'Yellow'},
    {name: 'Mobile Phone',price:11150, color:'Black'},
    {name: 'Smart Watch',price:5000, color:'Mate black'},
    {name: 'Sticky Notes',price:50, color:'rainbow'},
    {name: 'Water glass',price:5, color:'white'},
];

const budgetPrice = products.filter(product => product.price < 5000)
console.log(budgetPrice)