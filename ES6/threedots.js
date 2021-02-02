//for adding two different array
const ages = [10, 12, 15, 13];
const ages2 = [15, 16, 18, 20];
const ages3 = [22, 23, 25, 26, 29];


const agesAll = ages.concat(ages2);
console.log(agesAll);

const agesAll2 = ages.concat(ages2).concat(ages3);
console.log(agesAll2);

const agesAll3 = ages.concat(ages2).concat(ages3).concat([10, 10, 10]);
console.log(agesAll3);

//for adding two different array by three dots method
const agesAll4 = [...ages, ...ages2, ...ages3];
console.log(agesAll4);

const agesAll5 = [...ages, ...ages2, 10, 10, 10, ...ages2];
console.log(agesAll5);

// finding max value]

const alamgir = 650;
const alamin = 600;
const sakib = 500;

const maxValue = Math.max(alamgir, alamin, sakib);
console.log(maxValue);


//by alternative method
const property = [1000, 5000, 600, 1500];
const maxProperty = Math.max(property); //if use like that then this will not working 
const maxProperty = Math.max(...property);// method to get out maximum value from an array by three dots method.
console.log(maxProperty);





