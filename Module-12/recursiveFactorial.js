// 0! = 1;
// 2! = 1*2;
// 3! = 1*2*3;
// 4! = 1*2*3*4;
// 5! = 1*2*3*4*5;
// 6! = 1*2*3*4*5*6 || 5!*6 || (6-1)!*6;
// n! = (n-1)!*n;

//if function call into that function then it will call Recursive function

function factorial(n) {
    if (n == 0) {
        return 1;
    }
    else{
        return factorial(n-1)*n;
        //return n*factorial(n-1);
    }
}

console.log(factorial(10));