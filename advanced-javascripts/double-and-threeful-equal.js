// double equal

let x = 2;
let y = '2';

if (x == y) { //here == check/compare only two value is same then its true, waterer it number or string doesn't check that
    console.log('this is true');
}
else{
    console.log('this is not true');
}


if (x === y) { // Here === check/compare not only two values but also type also, this means number or string also.
    console.log('This is true');

}
else{
    console.log('This is false');
}