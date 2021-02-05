// একই টাইপেই অনেকগুলো object তৈরি করার জন্য এই method use করা হয় ।

class person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new person('Abu', 'Hanif', 25000);
const heroPerson2 = new person('Asif', 'Iqbal', 20000);
const heroPerson3 = new person('Alamin', 'Hossain', 30000);
console.log(heroPerson);
console.log(heroPerson2);
console.log(heroPerson3);


//আগে এইভাবে function দারা solution করা হতো

function person2(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
    
}

const normalPerson = new person2('Alamgir', 'Hossain', 35000);
console.log(normalPerson);