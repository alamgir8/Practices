
const student = [
    {id: 1, name: 'Sakib', school:'Tongi Govt Collage'},
    {id: 2, name: 'Asif', school:'Bhawal Govt Collage'},
    {id: 3, name: 'Mahtim', school:'Gaibandha Govt Collage'},
    {id: 4, name: 'Sarkar', school:'Timumir Govt Collage'},
];

let oneStudent = [];
for (let i = 0; i < student.length; i++) { //this one way to get a property value from an array object by for loop
    let element = student[i];
    oneStudent = element.name;
    console.log(oneStudent );
    
}

//another way get the same result by map and arrow function

const studentName = student.map( x => x.name);
console.log(studentName);