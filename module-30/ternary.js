//for simple condition 
const taka = 500;

if (taka >= 500) {
    console.log('I will eat birani');
} else {
    console.log(' I will eat only vegetable'); 
};

//alternative method by ternary operator
// ternary formula (condition ? true value : false value;)
const ami = taka >= 500 ? ' I will eat Polao with fresh meat' : ' I will eat only rice';
console.log(ami);


//for boolean with ternary method
let cssClass;
let active = false;
if (active === true) {
    cssClass = 'active'
} else {
    cssClass = 'inactive'
}

const hasActive = active ? 'active' : 'inactive';
console.log(hasActive);

//for multiple condition

let number = 50;
let online = true;


if (number <= 50 && online === false) {
    console.log('this is not for you');
} else {
    console.log('This is for you');
    
}

const isTrue = number >=50 && online === true ? 'you can access now' : "you can't access now";
console.log(isTrue);

//also can call function by ternary method
displayUser = () => {return ' you are online now'};
hideUser = () => { return ' you are offline now'};

const isTrue2 = number <= 50 || online === true ? displayUser() : hideUser();
console.log(isTrue2);


//if only have if not else then shortcut will be like this
let x = online && 100; //here first  check whether first value is false or not, if false then will execute first condition and if not then will second condition execute 100 
console.log(x);
let y = online || 100;  //here first  check whether first value is true or not, if true then will execute first condition and if not then will second condition execute 100
console.log(y);



//string to number convert

const num = +'45';
console.log(num);

//number to string convert
const num2 = 45 + ' ';
console.log(num2);


//json converter before and after

const person = [
    {
        id: 1,
        name: 'Alamgir',
        age: 26,
        salary: 40000
    }
];

//to convert into JSON 
const user = JSON.stringify(person);
console.log(user);

//convert from JSON
const user2 = JSON.parse(user);
console.log(user2);
console.log(user2[0].name);