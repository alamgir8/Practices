//Total marks calculation by for loop

let marks = [40, 50, 45, 60, 80, 90, 65, 70];
let sum = 0;

for (let i = 0; i < marks.length; i++) {
    const element = marks[i];
    sum = sum + element;
    
}
console.log('Total marks is ', sum);


//Total marks calculted by function

function getTotalMarks(number) {
    let sum = 0;
    for (let n = 0; n < number.length; n++) {
        const element = number[n];
        sum = sum + element;
        
    }
    return sum;
}



let number = [50, 50, 50, 60, 80, 90, 65, 70];

console.log('Total marks is', getTotalMarks(number));
console.log('Total marks is', getTotalMarks([50, 50, 50, 60, 80, 90, 65, 85]));

var friends = ["Alu", "Bulu", "culu", "dulu", "fulu"];

var allNames = "";

for(var i = 0; i< friends.length;i++){

    var name = friends[i];

    allNames = allNames + name;

}

console.log(allNames)