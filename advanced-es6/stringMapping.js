// string mapping

const friends = ['Shuvo','Ashiqur Rahman','Reza','Sabbir Ahmed','Rakib Hasan']

const frindsLength = friends.map(nameL => nameL.length)
// console.log(frindsLength)

const products = [
    {name: 'Water bottle',price:50, color:'Yellow'},
    {name: 'Mobile Phone',price:11150, color:'Black'},
    {name: 'Smart Watch',price:5000, color:'Mate black'},
    {name: 'Sticky Notes',price:50, color:'rainbow'},
    {name: 'Water glass',price:5, color:'white'},
];



const productsName = products.map(product => product.name );
const productsPrice = products.map(product => product.price)

console.log(productsName)
console.log(productsPrice)