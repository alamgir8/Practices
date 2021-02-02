//first Method to declare a function like this
function doubleIt(num) {
    return num * 2;
}

console.log(doubleIt(10));

//second method to declare a function
const multiplied = function Func(num) {
    return num * 3;
}

console.log(multiplied(10));

// function declaration in ES6 for one parameter
 const doubleIt2 = /*parameter*/ num => /*return method*/ num * 2;  //This is called a arrow function in ES6.
 console.log(doubleIt2(20));

 // for double parameter 
 const doubleIt3 = (num1 , num2, num3) => num1 + num2 +num3;
 console.log(doubleIt3(10, 50 ,100));

 // for no parameter 
 const doubleIt4 = () => 10*10;
console.log(doubleIt4());

//for multiline function 
 const doMath = (x , y) => {
     const sum = x + y;
     const minus = x - y;
     const multiple = x * y;
     const divided = x / y;
    // return multiple;
    return divided;
 }

 console.log(doMath(20, 10));
