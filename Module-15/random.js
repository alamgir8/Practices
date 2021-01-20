//creat a dice with simple method

let random = Math.random()*6;
let dice = Math.round(random);
console.log(dice);

//creat a dice by for loop

for( i = 0; i<=10; i++ ){
    let random = Math.random()*6;
    let dice = Math.round(random);
    console.log(dice);
}

let result = 100 + Math.random()*100;
console.log(result);