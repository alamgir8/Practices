

function evenly(num) {
    let result;
    if (num % 2 == 0) {
        // console.log(num, ': this is a even age');
        // return num;
        result = num;
    } else {
        // console.log(num*2 , ': This is not a even age');
        // return num*2;
        result = num*2;
    }
    return result;
}
let result = evenly(3);
console.log(result*result);

function evenlyAll(nums) {
    let evenArray = [ ];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        let result = evenly(num);
        evenArray.push(result);
}
return evenArray;
}
let nums =     [ 10, 20, 19, 23];
console.log(evenlyAll(nums));


// let friendAge = [23, 24, 25, 30];
// evenlyAll(friendAge);

// for (let i = 0; i < friendAge.length; i++) {
//     const age = friendAge[i];
   
//     evenly(age);
   
    
// }

// for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     // if (num % 2 == 0) {
//     //     console.log(num, ': this is a even age'); 
//     // } else {
//     //     console.log(num*2 , ': This is not a even age');
//     // }
//     evenly(num);
    
// }




// evenlyAll(friendAge);




