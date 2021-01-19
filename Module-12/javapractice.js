// inch to feet convert

function inchToFeet(inch){
    var feet = inch/12;
    return feet;
}

var alamgirFeet =inchToFeet(70);
console.log( alamgirFeet);

const alaminFeet = inchToFeet(71);
console.log(alaminFeet);

//It can be done also by loop, if value will change then use let and if not then use const for variable.

const Feet =[ 70, 71, 65];

const alamgirFeet =inchToFeet(Feet[0]);
console.log(`Alamgir's height ${alamgirFeet} feet.`);

const alaminFeet = inchToFeet(Feet[1]);
console.log(`Alamin's height ${alaminFeet} feet.`);
const sharfuddinFeet = inchToFeet(Feet[2]);
console.log(`Sharfuddin's height ${sharfuddinFeet} feet.`);