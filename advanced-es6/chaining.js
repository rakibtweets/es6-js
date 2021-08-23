// declare varibale based on the name of object property

const myObj = {
    firstName: 'Rakib',
    lastName: 'Hasan',
    institute: 'MIST',
    regNO:1550200315,
}
// const {firstName,lastName,institute}  = myObj;

// console.log(firstName,lastName,institute)


/* Destructuring array */

const [p,q] = [45,67]
// console.log(p,q)

let [firstName,lastName] = ['Rakib','Hasan']
// console.log(firstName,lastName)

// chaining

const company = {
    name:'Grameen Phone',
    ceo:{
        id:1,
        name:'Azmol',
        profession:'Marketing',
        address:'GP office'
    },
    web:{
        work:'Web development',
        employee: 22,
        framework:'React'
    }
};

// console can find the property
// console.log(company.web.framework) 

// chaing using (?) in nested object
console.log(company.web?.backend?.framework)