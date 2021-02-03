
// when you not declare a variable value it will show undefined.
let age;
// if you don't return in a function then it will show undefined
function add(num) {
    return;
}

//when finding property from an object but if that property not there then it will show undefined

const person = {
    name: 'alamgir',
    age: 26,

}

console.log(person.phone);

let ages = [12, 10, 15];
 console.log(ages[6]); // it also show undefined because it age array haven't 6number index