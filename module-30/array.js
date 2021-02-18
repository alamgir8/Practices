
const number = [ 10, 20, 30, 40,, 50];
const friends = ['Hanif', 'Aminul', 'Alamin', 'RaselMiya', 'lemon'];
const products = [
    {   
        id: 1,
        name:'laptop',
        price: 45000,
        isWarranty: true

    },
    {
        id: 2,
        name: 'Mobile',
        price: 25000,
        isWarranty: true
    },
    {
        id: 3,
        name:  'Watch',
        price: 400,
        isWarranty: false
    },
    {
        id: 4,
        name:  'Watch',
        price: 500,
        isWarranty: false
    },
    {
        id: 5,
        name:  'Watch',
        price: 100,
        isWarranty: false
    }
];

//get value from an array object by map loop method with arrow function
//for price of all product

const pdPrice = products.map(productPrice => productPrice.price);
console.log(pdPrice);

//for name of all product by map with array function
const pdName = products.map(productName => productName.name);
console.log(pdName);

//for multiple line map method
const pdName2 = products.map(productName => {
    return productName.name;
})
console.log(pdName2);



//get value from an array object by forEach loop with arrow function

const pdPrice2 = products.forEach(productPrice2 => console.log(productPrice2.price)); 
const pdName3 = products.forEach(productName => console.log(productName.name));


// to get filter value from an array object

const pdName4 = products.filter(pdName => pdName.price < 500 );
console.log(pdName4);

//get value by find method

const hasWatch = products.find(pdName => pdName.name === 'Watch');
console.log(hasWatch);

