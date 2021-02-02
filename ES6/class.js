
class Students{
    constructor(sId, sName){
        this.id = sId,
        this.name = sName,
        this.school = 'Tongi Govt Collage'
    }
}

const students1 = new Students(1, 'Alamgir');
const students2 = new Students(2, 'Alamin');

console.log(students1, students2);
console.log(students1.id, students2.name);
console.log(students1.name, students2.name);