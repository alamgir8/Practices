//calculatin max number in multiple number of students

let students = [90, 45, 65, 50, 60, 77, 58, 80, 40];

let max = students[0];

for (let i = 0; i < students.length; i++) {
    const element = students[i];
    if (element > max) {
        max = element;
    }
}

console.log(max);