//argument is not an array it is a array like object. It access all parameter in a function.


function arguMent(num1, num2) {
    // console.log(arguments[3]);
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        result = result + num;
    }
    // return num1 + num2;
    return result;
}

console.log(arguMent(10,15,30,40,50)); 
// arguMent(10,15,20,30,50);