
// let person = ['Alamgir', 'Alamin', 'Sakib', 'Sohag', 'Faruk'];


// for (let i = 0; i < person.length; i++) {
//     const element = person[i];
//     console.log(element);
// }

let age = [3, 5, 4, 7, 9, 8];


//one ways to get index or array from an array
let output = [];
for (let i = 0; i < age.length; i++) {
    const element = age[i];
    const result = element * element;
    output.push(result);
}

console.log(output);


// another ways using by map method

function square(element) {
    return element * element;
}

age.map(function (element, index, array) {
    console.log(element, index, array);
    
});
//this more shortcut ways
const result = age.map(function (element) {
    return element * element;
    
});
console.log(result);

//this is absulate shortcut way by using arrow function

const result2 = age.map( element => element * element);
console.log(result2);

const result3 = age.map( x => x * x); //same as upper method
console.log(result3);


//filter method by using arrow function

const number = [ 20, 30, 10, 40, 50];
const maxValue = number.filter( x=> x > 30);
console.log(maxValue);

const minValue = number.filter( x=> x < 30);
console.log(minValue);

//find method same as filter but it give only one value after condition works
const biggerValue = number.find(x => x > 30);
console.log(biggerValue);

const smallerValue = number.find(x => x < 30);
console.log(smallerValue);
