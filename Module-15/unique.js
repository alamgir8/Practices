
let person = [1, 2, 4, 5, 6, 7, 9, 1 ,3 ,4 ,6 ,7 ,1, 10, 9];
let uniqueName = [];

for (let i = 0; i < person.length; i++) {
    const element = person[i];
    let index = uniqueName.indexOf(element);
    if (index == -1) {
        uniqueName.push(element);
    }
    
}
console.log(uniqueName);

function add(a, b){

    return a + b;

}

console.log(add("adam" + "eve"))