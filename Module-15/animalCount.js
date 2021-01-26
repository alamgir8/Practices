
// //by if else || simple method
let depth = 300;
let animal = 0;

if(depth <=10){
    animal = depth * 50;
}
    else if(depth <=20){
        let firstPart = 10 * 50;
        let remaining = depth - 10;
        let secondPart = remaining * 100;
        animal = firstPart + secondPart;
    }
else{
    let firstPart = 10 * 50;
    let secondPart = 10 * 100;
    let remaining = depth - 20;
    let thirdPart = remaining * 300;
    animal = firstPart + secondPart + thirdPart;

}

console.log('Total animal is',animal);


//By function

function animalCount(number) {
    let animal = 0;
    if (number <=10) {
        animal = 10*50;
    }
        else if (number <=20) {
            let firstPart = 10 * 50;
            let remaining = number - 10;
            let secondPart = reamining * 100;
            animal = firstPart + secondPart;
        }
    else{
        let firstPart = 10 * 50;
        let secondPart = 10 * 100;
        let remaining = number - 20;
        let thirdPart = remaining * 300;
        animal = firstPart + secondPart + thirdPart;
    }
   return animal; 
}

console.log('Total animal is', animalCount(10));