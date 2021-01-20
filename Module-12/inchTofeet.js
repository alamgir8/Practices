function inchToFeet(n) {
    let feet = n / 12 ;
    return  feet;

}
let result = inchToFeet(70);
console.log(`Alamgir's height is ${result} feet.`);
console.log('Alamin height is', inchToFeet(71),'feet');
console.log('Sharfuddin height is ' + inchToFeet(68) + ' feet.');
