//first method

function reverseStr(str){
    let reverse = '';

    for(i = 0; i <str.length; i++){
        let element = str[i];
        reverse = element + reverse;
    }
    return reverse;
}

let statement = 'my name is Alamgir Hossain';

console.log(reverseStr(statement));


//second method
var sentence = "I am hardworking. I am serious. I am sure I will do it";
var reverse = sentence.split('').reverse().join('');

console.log(reverse)



