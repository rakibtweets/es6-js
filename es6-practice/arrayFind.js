/* 
Problem Defination :  একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 
*/

// array declaration

const products = [
    {name:'Apple',price:15555},
    {name:'One Plus',price:5000},
    {name:'Samsung',price:40000},
    {name:'Nokia',price:25000},
    {name:'Xaomi',price:12354},
];

const price = products.find(price => price.price == 5000)
console.log(price)