
const age = [ 2, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < age.length; i++) {
    
    if (age[i] > 5) {
        break;
    }
    console.log(age[i]); 
}

const number = [ -1, 2,-3, 4, -5, 6, -7, 8, -9, 10];
for (let i = 0; i <number.length; i++) {

    if (number[i] < 0) {
        continue;
    }
    console.log(number[i]);
}

console.log(number2);
var number2 = [1, 2, 3, 4];
function doSomething(x, y = 4){

    console.log(y);
    
    }
    
    doSomething(3,2);

    if( 'false' ){

        console.log("I am not false")
    
    }
    
    else{
    
        console.log("I am false")
    
    }