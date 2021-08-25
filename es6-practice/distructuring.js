/* 
problem defination : সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 
*/

// declarationg complex object

const company = {
    name:'Grameen Phone',
    ceo:{
        name:'Rakib Hasan',
        profession: 'Web development',
        age: 28,
        address: 'Hatimara'
    },
    web:{
       fontend:{ 
        language:'Html5, css3, javascript',
        framework:'Bootstrap, React'
       },
       backend:{
           language:'NodeJs',
           framework:'ExpressJs',
           data:'MongoDB'
       },
    }
};

// destructuring object

const {name,profession,age} = company.ceo

// console.log(name,profession,age);

// fontend

const {language,framework} = company.web.fontend

// console.log(`Fontend Language\nLanguage: ${language}\nFramework: ${framework}`)

// let {language,framework} = company.web.backend
console.log(`Fontend Language\nLanguage: ${language}\nFramework: ${framework}`)

