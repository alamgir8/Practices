//swap by simple method

let a = 10;
let b = 20;
console.log("Before Swap a =", a,", b = ", b);

let c = a;
a = b;
b = c;

console.log('After swap a = ', a, ', b = ', b);

//swap by second method without varible

let x = 30;
let y = 40;
console.log("Before Swap x =", x,", y = ", y);

x = x + y;
y = x - y;
x = x - y;
console.log("After Swap x =", x,", y = ", y);


//method that use in javascript only by array

p = 50;
q = 100;

[p, q] = [q, p];
console.log("After Swap p =", p,", q = ", q);



