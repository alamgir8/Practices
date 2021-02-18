//destructor for an array
const number = [ 12, 15];

const [first, second] =  number;
console.log(first, second);

//destructor for an object

const {name, age} = 
    {
        id: 1,
        name: 'Hanif',
        age: 25,
        salary: 25000
    }
   



console.log(name, age);

const x = 25;
const y = 30;
const object = {x:x, y:y};
console.log(object);
const object2 = {x, y};//for shortcut as same name x and y
console.log(object2);

//create  new array with an existing array like number  by three dot method
const newNumber = [...number, 40, 50, 60];
console.log(newNumber);

const newNumber2 = number.push(40, 50); //in push method it not creat new array, it just push value in same array
console.log(number);
