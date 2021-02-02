const firstName = 'Alamgir';
const lastName = 'Hossain'

const fullName = firstName + ' ' + lastName +' is a web-developer';//when two variable add then it will look like this ways. 
const fullName2 = `${firstName} ${lastName} is a web-developer.`  //alternative as upper method but it is easier and shorter then that. it is use in ES6.

const fullName3 = `My name is MD. ${firstName} ${lastName}
I'am a web-developer. i have about ${10+100+400} taka.`  //for multiple line paragraph. it is a powerful method, here can be use add, divided or multiple.


console.log(fullName);
console.log(fullName2);
console.log(fullName3);