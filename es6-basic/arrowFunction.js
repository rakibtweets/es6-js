// normal function

function add(num1,num2){
    return num1 + num2;
}
const numbers = add(25,20)
// console.log(numbers)

// variable declearation fucntion or assinging a function to a variable
// function expression
let multiplication = function multiply(num1,num2){
    return num1 * num2
}
const multiplyNumber = multiplication(5,5)
// console.log(multiplyNumber)

// function without name is call anonymus function
let division = function (num1,num2){ // anonymous function
    return num1 / num2
}
const devideNumber = division(55,5)
// console.log(devideNumber)



// es6 arrow function

const addition /* function variable */ = (num1,num2)/* parameters */ => num1 + num2;

console.log(addition(50,43))

