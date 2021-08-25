// temlate string

// calculation

let table;

for(let i = 1; i <= 10; i++){
    const num = 5;
    table = num * i

    // console.log(`${num} x ${i} = ${table}`)
};

// templete string object

const personInfo = {
    firstName: 'Rakib',
    lastName:'Hasan',
    age: 25,
    birthday: '2nd October',
    adress: 'Hatimara',
    study: 'MIST',
    currentCourse:'Web development with Jhankar Mahabub'
}

const myInfo = `Hellow ! My name is ${personInfo.firstName} ${personInfo.lastName}\n
I am ${personInfo.age} years old.\n
My birthday is on ${personInfo.birthday}\n
My college name is ${personInfo.study}.\n
I am currently doing a course ${personInfo.currentCourse}

`

console.log(myInfo)