

function description(name, age, task) {
    console.log("Hello ", name);
    console.log('You are', age, 'old');
    task();
    
}
function webDeveloper() {
    console.log('You are a web-develope.r');
}

function army() {
    console.log('You are a army.');
}

function student() {
    console.log('You are a student.');
}


(description('Alamgir', 26, webDeveloper));
(description('Alamin', 24, army));
(description('Sakib', 17, student));

//When a function is called from a function then it call, callBackFunction.