function evenly(num) {
    if (num % 2 == 0) {
        console.log(num, ': this is a even age'); 
    } else {
        console.log(num*2 , ': This is not a even age');
    }
}

function evenlyAll(nums) {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        evenly(num);
}
}
nums =     [ 10, 20, 19, 23];
evenlyAll(nums);


friendAge = [23, 24, 25, 30];
evenlyAll(friendAge);

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




