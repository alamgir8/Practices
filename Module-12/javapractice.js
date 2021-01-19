// inch to feet convert

function inchToFeet(inch) {
  var feet = inch / 12;
  return feet;
}

var alamgirFeet1 = inchToFeet(70);
console.log(alamgirFeet1);

const alaminFeet1 = inchToFeet(71);
console.log(alaminFeet1);

//It can be done also by loop, if value will change then use let and if not then use const for variable.

let Feet = [70, 71, 65];

const alamgirFeet = inchToFeet(Feet[0]);
console.log(`Alamgir's height ${alamgirFeet} feet.`);

const alaminFeet = inchToFeet(Feet[1]);
console.log(`Alamin's height ${alaminFeet} feet.`);
const sharfuddinFeet = inchToFeet(Feet[2]);
console.log(`Sharfuddin's height ${sharfuddinFeet} feet.`);

//leap year calculation
//1st method (not fully complete is medthd)
const year1 = 3020;
const remainder = year1 % 4;

if (remainder == 0) {
  console.log("This year is leap year");
} else {
  console.log("This year is not a leap year");
};

// 2nd method (this method is perfect or complete for calculation leap year)
function isLeapYear(year) {
  return year = (year % 100 === 0 ) ? (year % 400 === 0) : (year % 4 ===0);

}

console.log(isLeapYear(2016));
console.log(isLeapYear(1700));
console.log(isLeapYear(1800));

 
// best ways to find out leap year by function
function isLeapYear(year){
  
  if(year % 100 && year % 400 && year % 4 ==0){
  console.log("This is year is a Leap Year");
  }
  else {
  console.log("This is year is Not a  Leap Year");
  }
 return year;
  }
  
  console.log(isLeapYear(2020));
  console.log(isLeapYear(2016));
  console.log(isLeapYear(1700));


//factorial value calculation
//by for loop
// let factorial = 10;
// for (let i = 1; i <= 10; i++) {
//     factorial = factorial * i;
//     console.log(factorial);
    
// }

// //by while loop

// let i = 1;
// let fact =1;
// while (i <= 10) {
    
//     fact = fact * i;
//     console.log(fact);
//     i++;
   
// }

// //by function

// function factorial2(n){
//     let factorial2 = 1;
//     for (let i = 1; i <= n; i++ ) {
//         factorial2 = factorial2 * i;
        
        
//     }
//     return factorial2;
// }

// console.log(factorial2(0));


// function factorial (n){
//   var i = 1; 
//   var factorial = 1; 
//   while (i<n){
//     factorial =factorial*i; 
//     i++;
//   }
//     return factorial;
//   } 
//   var result = factorial (5); 
//   console.log(result);

//factorial by recursive method
// function factorial(n) {
//   if (n == 0) {
//     return 1;
//   }
//   else{
//     return n*factorial(n-1);
//   }
// }

// console.log(factorial(10));


//Fibonacci series
//by for loop
// fibo[2] = fibo[2-1] + fibo[2-2];
// fibo[3] = fibo[3-1] + fibo[3-2];
// fibo[n] = fibo[n-1] + fibo[n-2];
// fibo[i] = fibo[i-1] + fibo[i-2];

// let fibo = [0, 1];
// for (let i = 2; i <=12; i++){
//   fibo[i] = fibo[i-1] + fibo[i-2];
  
 
// }
// console.log(fibo);
//by while loop
// let fibo = [0,1];
// while (condition) {
  
// }

//by function

// function fibonacci(n) {
//   var fibo = [0, 1];
//   for (let i = 2; i <=n; i++) {
//     fibo[i] = fibo[i-1] +fibo[i-2];
    
//   }
//   return fibo;
// }
// console.log(fibonacci(12));


  //recursive method fibonacci

  // function fibonacci(n) {
  //   if (n==0) {
  //       return 0;   
  //   }
  //   if (n==1) {
  //     return 1;
  //   }
  //   else{
  //     return fibonacci(n-1) +fibonacci(n-2);
  //   }
    
  // }

  // console.log(fibonacci(12));

  //fibonacci series by recursive method


