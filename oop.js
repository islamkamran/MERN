// functional programming

let baseSalary = 30_000;
let overTime = 10;
let rate = 20;

function getWage(baseSalary,overTime,rate){
    return baseSalary + (overTime*rate);
}

console.log("The total Salary is: " + getWage(baseSalary,overTime,rate));

//Doing with OOP Concept Encapsulation

// make an object

let employee = {
    baseSalary : 30_000,
    overTime : 10,
    rate : 20,

    getWage: function(){
        return this.baseSalary + (this.overTime * this.rate);
    }

};

console.log("The total Salary through OOP is: " + employee.getWage()); 