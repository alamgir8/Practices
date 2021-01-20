//calculating max value by for if else

let aminul = 900;
let alamgir = 850;
let alamin = 750;


console.log(Math.max(aminul,alamgir,alamin));

if (aminul > alamgir) {
    if (aminul > alamin) {
        console.log('aminul is bigger');
    }
    else{
        console.log('alamin is bigger')
    }
}
else{
    if (alamgir > alamin) {
        console.log('alamgir is bigger');
    }
    else{
        console.log('alamin is bigger');
    }
   
}




function add(a, b){

     return a + b;

}



console.log(add(568, 254));