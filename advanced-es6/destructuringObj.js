/* Destructuring obj using es6 */

// normal obj decleartion

const student = { // object declearation

    // obj property
    id: 1, 
    schoolName: 'Hatimara College',
    class: 9,
    address:'Hatimara word no 3'

}

// getting obj property and assigning to new variable

// const id = student.id
// const schoolName = student.schoolName
// const address = student.address

// console.log(id,schoolName,address)

// destructuring obj using es6

const fish = {
    id: 58,
    name:'King Hilsha',
    price: 2500,
    address: 'Chadpur',
    color:'silver'
};

// console.log(fish.id)

// destructuring objec

// rules: {declear variables in karly Brackets} = objectName:propertyName

// const {id,name,address,color} = fish;

// console.log(id,name,color); 

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
}
const {name,profession} = company.ceo 
console.log(name,profession)

