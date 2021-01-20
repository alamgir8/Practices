//find out prime number by for loop

let num = 17;
for (let i = 2; i < num; i++) {
    // console.log(i, n % i);
    if (num % i == 0) {
        console.log('This is not a prime number');
        break;
        
    }
    else{
        console.log('This is a prime number');
        break;
    }
}

//by function

function checkPrim(n) {
    for (let i = 2; i < n ; i++) {
        if (n % i == 0) {
            return 'This is not a prime nubmer';
        }
        
    }
    return 'This is a prime number';
}

console.log(checkPrim(20));
console.log(checkPrim(17));