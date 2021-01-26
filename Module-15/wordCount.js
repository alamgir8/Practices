
// let speech = "I am Alamgir    Hossain. I am 26 year old";

// let count1 = [''];
// for (let i = 0; i < speech.length; i++) {
//     let charctar = speech[i];
    
//     if (charctar ==  " " && speech[i-1] != " ") {
//         count1++;
//     }
    
// }
// count1++;
// console.log(count1);



// var sentence = "I am hardworking. I am serious. I am sure I will do it";

// var count = 0;

// for(var i = 0; i < sentence.length; i++){

//     var letter = sentence[i];

//     if(letter == "a"){

//         count++;

//     }

// }

// console.log(count)

// console.log(longestStringForLoop(['RaselMiya','Hanif', 'Aminul', 'Alamin', 'Salauddin', 'Sharfuddin']));
// // console.log(longestStringReduce(['boop', 'bloomburg', 'hellohhhhhh']));

// function longestStringForLoop(arr) {
//   let word = "";
//   for (let i = 0; i < arr.length; i++) {
    
//     if (word.length < arr[i].length) {
//       word = arr[i];
//     }
//   }
//   return word;
// }

// function longestStringReduce(arr) {
//   return arr.reduce((a, b) => a.length < b.length ? b : a, "");
// }


function megaFriend(friendName ) {
  var biggerName =' ';

  for (var i = 0; i < friendName.length; i++) {
    
    if (biggerName.length < friendName[i].length ) {
      biggerName = friendName[i];
    }
    
  }
  return biggerName;
}

console.log(megaFriend(['RaselMiyaRipon','Hanif', 'Aminul', 'Alamin', 'Salauddinhhhhhh', 'Sharfuddin']));
megaFriend();
