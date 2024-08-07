// var numbers = [3, 56, 2, 48, 5];

                                    //Map -Create a new array by doing something with each item in an array.


    // 1 simple
    // function double (x) {
    //     return x*2;
    // }
    //
    // const newNumbers = numbers.map(double)
    //
    // console.log(newNumbers);

// 2 simple

// var newNumbers = [];
// function double(x) {
//     newNumbers.push(x * 2)
// }
// numbers.forEach(double);
//


    // 3 simple
    // numbers.forEach(function(x) {
    //     newNumbers.push(x * 2)
    // });



//4 simple is the shortest
// const newNumbers = numbers.map(function (x) {
//     return x*2;
// })
// console.log(newNumbers);

                            //Filter - Create a new array by keeping the items that return true.

// var numbers2 = [3, 56, 2, 48, 5];
// const newNumber = numbers2.filter(function (num) {
//     return num > 10
// })
//
// console.log(newNumber);


                                //Reduce - Accumulate a value by doing something to each item in an array.
//1 simple
// var numbers3 = [3, 56, 2, 48, 5];
//  var newNumber3 = 0;
//  numbers3.forEach(function(currentNum){
//      newNumber3 += currentNum;
//  })
// console.log(newNumber3);


                // //2 simple
                // var numbers3 = [3, 56, 2, 48, 5];
                // const newNumber3 = numbers3.reduce(function (accumulate, currentNumber) {
                //     console.log("accumulate=" + accumulate);
                //       console.log("currentNumber=" + currentNumber);
                //     return accumulate + currentNumber;
                // })
                // console.log(newNumber3);



                                                            //Find - find the first item that matches from an array.

// var numbers2 = [3, 56, 2, 48, 5];
// const newNumber = numbers2.filter(function (num) {
//     return num > 10
// })
//
// console.log(newNumber);


//FindIndex - find the index of the first item that matches.
import emojipedia from "./emojipedia.js";
// console.log(emojipedia);

const newEmojipedia = emojipedia.map(function (emojiEntry) {
    return emojiEntry.meaning.substring(0, 10)
})
console.log(newEmojipedia);



