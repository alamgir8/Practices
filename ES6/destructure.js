
const person = {
    id: 1,
    firstName: 'Alamgir',
    lastName: 'Hossain',
    village: 'Boyrapara',
    upozilla: 'Dewangonj',
    district: 'Jamalpur',
    college: 'Tongi Govt College',
    email: 'ahossain38900@gmail.com',
    friends:['Rasel', 'Hanif','Aminul', 'Alamin'],
    works: 'web-developer',
    phone: 01957930032,


}
console.log(person.friends); // this one way to get value from an object 

const {firstName, lastName, phone, friends} = person; //this is a destructor method to get a property value from and object
console.log(firstName, lastName, phone, friends);

const friend = ['Rasel', 'Hanif','Aminul', 'Alamin', 'lemon', 'Sumon', 'Mamun']; //destructor from and array

const [firstFriend, secondFriend, ...otherfriends] = friend;
console.log(firstFriend, secondFriend, otherfriends);



const persons ={
    id: 2,
    info: {
        firstName: 'Hanif',
        lastName: 'Khan',
        phones: 01958304943,
    }
}

const {phones} = persons.info; // destructure from and object in object
console.log(phones);
