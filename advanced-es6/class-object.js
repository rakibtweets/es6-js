// class object 

class Support {
    name;
    designation = 'Professional web developer';
    role = 'Support Web Dev';
    address;

    //class shuru korar function class constructor
    constructor(name,address){
        this.name = name;
        this.address = address;
        }
    // function declaration without function keyword
    startSession(){
        console.log(this.name,'start a support session');
    }
}

// creating object using class

// new object 
const aamir = new Support('Amir khan','Bangladesh');
const salman = new Support('Salman khan','Gana');
// calling function
aamir.startSession()
salman.startSession()

// console.log(aamir,salman)