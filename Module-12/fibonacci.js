// // 3 = 1+2 || (3-1) + (3-2);
// // fibo[2] = fibo[2-1] + fibo[2-2];
// // fibo[3] = fibo[3-1] + fibo[3-2];
// // fibo[4] = fibo[4-1] + fibo[4-2];
// // fibo[5] = fibo[5-1] + fibo[5-2];
// // fibo[6] = fibo[6-1] + fibo[6-2];
// // fibo[7] = fibo[7-1] + fibo[7-2];
// // fibo[8] = fibo[8-1] + fibo[8-2];
// // fibo[n] = fibo[n-1] + fibo[n-2];
// // fibo[i] = fibo[i-1] + fibo[i-2];

// //Calculation fibonacci by for loop

    let fibo = [0, 1];
    for (let i = 2; i <= 10; i++) {
         fibo[i] = fibo[i-1] + fibo[i-2];
    }
    
    console.log(fibo);

    // //by function with for loop
   
    function fibonacci(n) {
        let fibo = [0, 1];
        for (let k = 2; k <= n; k++) {
           fibo[k] =fibo[k-1] + fibo[k-2];
            
        }
        return fibo;
    }

    console.log(fibonacci(12));


    //by while loop

    let j = 2;
    let fiboW = [0, 1];

    while (j <=13 ) {
      
        fiboW[j] =  fiboW[j-1] + fiboW[j-2];
        j++
        
    }
    console.log(fiboW);

    //by function with while loop

    function fibonacci(num) {
        let j = 2;
    let fiboW = [0, 1];

    while (j <=num ) {
      
        fiboW[j] =  fiboW[j-1] + fiboW[j-2];
        j++
        
    }
       return fiboW; 
    }
    console.log(fibonacci(14));


    //by recursive method


    function fibonacciR(number) {
        if ( number == 0) {
            return [0];
            
        }
        else if (number == 1) {
            return [0, 1];            
        }
        else{
            let fiboR = fibonacciR(number-1);
            let nextelement = fiboR[number-1] + fiboR[number-2]
            fiboR.push(nextelement);
            return fiboR;
        }
    }

    console.log(fibonacciR(10));