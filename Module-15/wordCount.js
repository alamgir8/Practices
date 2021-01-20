
let speech = "I am Alamgir    Hossain. I am 26 year old";

let count1 = 0;
for (let i = 0; i < speech.length; i++) {
    let charctar = speech[i];
    
    if (charctar ==  " " && speech[i-1] != " ") {
        count1++;
    }
    
}
count1++;
console.log(count1);



var sentence = "I am hardworking. I am serious. I am sure I will do it";

var count = 0;

for(var i = 0; i < sentence.length; i++){

    var letter = sentence[i];

    if(letter == "a"){

        count++;

    }

}

console.log(count)

