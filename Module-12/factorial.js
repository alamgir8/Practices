//factorial culculation by for loop 
// 2! = 1*2
// 3! = 1*2*3
// 4! = 1*2*3*4
// 5! = 1*2*3*4*5

// let n = 12;
let factorialF = 1;
for (let i = 1; i <= 12; i++) {
    factorialF = factorialF * i;
    console.log(i, 's factorial', factorialF);
    
}


//Calculation factorial by for loop with function

function findOutFactorial(n) {
    let factorial = 1;
    for (let i = 1; i <= n ; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

console.log(findOutFactorial(5));


//Calculation factorial by while loop

let f = 1;
let factorialW = 1;
while ( f <= 12 ) {
    factorialW = factorialW * f ;
    //if i console in while then it will work for every number or going through bottom to up to meet condition
    // console.log(factorialW);
    f++
    
}
//if i console outside from loop then it will work for one time and will give the required number value.
console.log(factorialW);

//factorial calculation by while loop with function

function factorialCheck(number) {
    let k = 1;
    let factorialWF = 1;

    while (k <= number) {
        factorialWF = factorialWF * k;
        k++
    }
    return factorialWF;
}

console.log(factorialCheck(10));