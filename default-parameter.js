// default perameter in function
// Default parameters allow us to initialize functions with default values

function add(num1,num2 = 0){ // default parameter in es6

  /*   // option 2
     num2 == num2 || 0 ; */

    // option 1
   /*  if(num2 == undefined){ 
        num2 = 0 // before es6 condion was to use to handle as default parameters
    } */

    const total = num1 + num2;
    return total
}

// function calling

const numbers = add(17,20)
console.log(numbers)