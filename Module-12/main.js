// // var, let, const three type to writen variable
// let age =30;
// console.log(age);

// // Data type: String, Numbers, Boolean, null, undefined
// var myName = "Alamgir Hossain";
// var myAge =27;
// var rating =4.5;
// var isCool =true;
// var x =null;
// var y = undefined;
// var z;

// console.log(typeof isCool);

// //Concatenation
// console.log(" My name Is MD. " +myName+". " + "I'm " + myAge + "years old.");
// //Templete string

// var hello =`My name is ${myName} and I am ${myAge} years old.`
// console.log(hello);

// var s = 'Hello World'
// console.log(s.length);
// console.log(s.toLocaleLowerCase());
// console.log(s.toLocaleUpperCase());
// console.log(s.substring(0, 5).toLocaleUpperCase());
// console.log(s.split(''));

// var n ='mobile, computer, mouse, headphone';
//  console.log(n.split(','));


//  //Array-variable that hold multiple values.
 
//  var fruit =['apple','oragne', 'pears',10, true];
//  console.log(fruit);

//  console.log(fruit[1]);
//  fruit.push('mango');
//  fruit.pop();
//  fruit.unshift('labu');
//  fruit.shift('');
 
//  console.log(fruit);

//  const person = {
//     firstName :'Alamgir',
//     lastName :'Hossain',
//     age :27,
//     hobbies :['travelling', 'cricket', 'football'],
//     address :{
//         street:'50 main st',
//         city:'Jamalpur',
//         state: 'NA'
//     }
// }
// person.email ='ahossain38900@gmail.com'

// console.log(person);

// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.city);



// const personInfo =[
//     {
//         id: 1,
//         text :'Hello Boss',
//         isComplete:true
//     },
//     {
//         id:2,
//         text:'How are you today',
//         isComplete:false
//     },
//     {
//         id:3,
//         text:'Where are you going',
//         isComplete:true
//     }
// ];

// // for (let i = 0; i < personInfo.length; i++) {
// //     const element = personInfo[i].text;
// //     console.log(element);
    
// // }

// for(let personIn of personInfo){
//     console.log(personIn.id, personIn.text);
// }

// console.log(personInfo);
// console.log(personInfo[1].text);

// const personJson =JSON.stringify(personInfo);

// console.log(personJson);



//  //Function
//  function add (num1, num2){
//      var total =num1 + num2;
//      return total;
//  }

//  var result1 = add(10, 20);
//  console.log(result1);


//  //for loop
//  for (let i = 0; i <= 10; i++) {
//      console.log(`for loop number: ${i}`);
     
//  }

//  //while loop

//  let i=0;
//  while (i<10) {
//     console.log(`while loop number: ${i}`);
//     i++;
     
//  }

//  //forEach, map, filter
//  personInfo.forEach(function(personI){
//      console.log(personI.text);
//  });

//  const personText = personInfo.map(function(personI){
//      return personI.text;
//  }
//  );

//  console.log(personText)

//  const personComplete = personInfo.filter(function(personI){
//     return personI.isComplete===true;
// }
// );

// console.log(personComplete);


//if, else if, else

const x = 20;

if (x === 10) {
    console.log('x is 10');

}

else{
    console.log('x is not 10')
}

// const y = '10';

// if (y === 10) {
//     console.log('y is 10');
// }




