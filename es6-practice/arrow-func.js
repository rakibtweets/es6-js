// Arrow function 

/* 
problem defination 1: Writing a function input parameter will devided by 5
*/

// arrow function declaration

const devidation = (number) => number / 5;

// console.log(devidation(100))

/* 
problem defination 2: multiplication table using arrow function
*/

// arrow function declaration

const multiplyTable = (number) => {
    
    for(let i = 1; i <= 10; i++){    
        let multiply ;
        multiply = number * i;
        console.log(`${number} x ${i} = ${multiply}`);
    }
}

// console.log(multiplyTable(7))


/* 
problem defination 3: taking three parameter in an arraw function multiply them and return the result;
*/

// single line arrow function
const multiplyNums = (num1,num2,num3) =>  num1 * num2 * num3 ;

// console.log(multiplyNums(2,5,4))

// return arraow function

const summationSeries = (limit) => {
    let sum = 0 ;
    for (let i = 0; i <= limit; i++){
        sum = sum + i;
    }
    return sum;
}

const limitNo = summationSeries(10)
// console.log(limitNo)

/* 
Problem defination 4: taking two parameter in an arrow function. add value 2 in each parameter. sum two parameter then multiply by 2.
*/

const addMultiply = (num1,num2) => {

    const multiply = (num1 + 2) * (num2 + 2);
    return multiply

}

console.log(addMultiply(5,8))