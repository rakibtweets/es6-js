// inheritence 

// common function
class TeamMember {
    name;
    designation = 'Professional web developer';
    role = 'Support Web Dev';
    address;

    //class shuru korar function class constructor
    constructor(name,address){
        this.name = name;
        this.address = address;
        }
}



class Support {
   
    // function declaration without function keyword
    startSession(){
        console.log(this.name,'start a support session');
    }
}

// student class

class StudentCare {
    name;
    designation = 'Student Care Web dev';
    address = 'Bangladesh';
    constructor(name,address) {
        this.name = name;
        this.address = address;
    }
    // function in class

    buildARoutine(student){
        console.log(this.name,'Build a routine for', student);
    }
}

// creating object

const alia = new StudentCare('Alia Bhat','India')
alia.buildARoutine('Sady')
console.log(alia)


// naptune app

class NaptuneDev {
    name;
    designation = 'Student Care Web dev';
    address = 'Bangladesh';
    constructor(name,address) {
        this.name = name;
        this.address = address;
    }
    // function in class

    releaseApp(version){
        console.log(this.name,'release app version', version);
    }
}