

const person = [
    {
        id: 1,
        name: 'Alamgir',
        age: 26,
        salary: 50000
    }
];


localStorage.setItem('person', JSON.stringify(person)); //for sending a value to local Storage or server
const thisStore = JSON.parse(localStorage.getItem('person'));
console.log(thisStore);

// const store = JSON.parse(thisStore); //for longer version
// console.log(store);

