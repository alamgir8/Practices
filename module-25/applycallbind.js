

const person ={
    firstName : 'Abu',
    lastName :'Hanif',
    salary: 30000,
    number :[10, 15, 20, 30],
    getFullName : function(){
        console.log(this.firstName, this.lastName);

    },
    
    friends:{
        firstName: 'Rasel',
        lastName: 'Miya',
        age: 30,
        salary:20000
    },
    chargeBill: function(amount, tips, tax){
        this.salary = this.salary - amount - tips - tax;
        // this.friends.salary = this.friends.salary - amount;
        return this.salary;
    }

}
//for get value from an object and calculation that value
// person.chargeBill(2000);
// console.log(person.salary);
// console.log(person.friends.salary);



//for use an object function to another object by bind method

// const person2 ={
//     firstName : 'Sakib',
//     lastName :'Hasan',
//     salary : 25000
// }

// person2ChargeBill = person.chargeBill.bind(person2);
// person2ChargeBill(5000);
// console.log(person2.salary);
// console.log(person.salary);



//for use an object function to another object by call method

// const person3 ={
//     firstName : 'Asif',
//     lastName :'Iqbal',
//     salary : 35000
// }
// person3ChargeBill = person.chargeBill.call(person3, 100,50,50); // in this method use comma for input different value.
// person3ChargeBill = person.chargeBill.call(person3, 500,250,250);
// console.log(person3.salary);



//for use an object function to another object by apply method 

const person4 ={
    firstName : 'Alamin',
    lastName :'Hossain',
    salary : 20000
}
person4ChargeBill = person.chargeBill.apply(person4, [100,50,50]);  //in this method use an array for input value
person4ChargeBill = person.chargeBill.apply(person4, [500,250,250]);
console.log(person4.salary);
