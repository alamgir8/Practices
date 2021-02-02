
class Parent{
    constructor(){
        this.fatherName = 'Ramzan Ali'
    }
}

class Child extends Parent{
    constructor(id, name) {
        super();
        this.id = id;
        this.name = name;
        this.description = "I'm is a good boy."
    }
    getFullName(){
        return 'My name is ' + this.name + '. My father name is ' + this.fatherName + '. ' + this.description;  // function can be declare in class
    }
}

const firstChild = new Child(1, 'Aminul Islam');
const secondChild = new Child(2, 'Alamgir Hossain');
const thirdChild = new Child(3, 'Alamin Hossain');
const fourthChild = new Child(4, 'Sakib Hasan');

// console.log(firstChild);
// console.log(secondChild);
// console.log(thirdChild);
// console.log(fourthChild)

//also using by function
console.log(firstChild.getFullName());
console.log(secondChild.getFullName());
console.log(thirdChild.getFullName());
console.log(fourthChild.getFullName());

