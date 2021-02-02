//const is short form of constant ,Constants are block-scoped, much like variables declared using the let keyword. The value of a constant can't be changed through reassignment, and it can't be redeclared.

const number = [24,25, 50];

number.push(12);
number.pop();
number[0] = 30;
console.log(number);


const person = {
    firstName: 'Alamgir',
    lastName: 'Hossain',
    phone : '01957930032'
}

person.email ='ahossain38900@gmail.com'; 
console.log(person);

let patientName = 'Sakib';


//let can be re-assign but it can't go through global when it declare in a loop .

let sum = 0;

for (let i = 0; i < 10; i++) {
    sum = sum + i;
    
}
console.log(i);