

function add(num1 , num2 = 15 /**as a default value of second parameter it will count only when second parameter value not declare, if declare then this will not count. it is short method that use in ES6 */) {
    //if num2 or second perimeter value not given then can be solved to get rid of undefined by this method.

    // if (num2 === undefined) {
    //     num2 = 0;
    // } 

    //or like this shorter method
    // num2 = num2 || 0;

    return num1 + num2;
}

console.log(add( 15,10));
console.log(add(10));