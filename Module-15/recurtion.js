// find out factorial by iterative method

function factorialFindout(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial = factorial * i;
        
    }
    return factorial;
}

console.log(factorialFindout(10));


// find out factorial by recusive method

function factorialCheckOut(number) {
    if (number == 0) {
        // console.log(number);
        return 1;
    }
    else{
        // console.log(number, number-1);
        return number * factorialCheckOut(number-1); //|| return 5 *(5-1);
    }
}

console.log(factorialCheckOut(5));