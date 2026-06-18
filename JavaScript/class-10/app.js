// Array Methods
// pop() push slice splice shift unshift


var arr = ["Ali", "Ahmed", "Sana", "Saba", "Maryam", "Saima", "Samina", "  Sakeena", "tuba", "sobia"]


// console.log(names.length);

// names.pop()//
// names.push("anmol", "nayab")//
// console.log(names);
// names.unshift("Sobia")
// console.log(names);
//

//slice() array method -- shellow copy -- slice( startIndex  , endIndex[notincluded] )
// var newList = names.slice(1,8)
// console.log(newList);
// console.log(names.slice());
// console.log(names.slice(3));


//splice() array method--deep copy-- slice( startIndex  , deleteCount, addition )
// var newList = arr.splice(2,0,"anmol", "nayab", "Ishtiaque");

// arr.splice(2,0,"anmol", "nayab", "Ishtiaque")
// arr.splice(2)
// console.log(arr);


// --- interview question -- remove all elemements from array without using pop.

// arr.splice(0)
// arr = []

// var emptyArray = arr.slice(0, 0)
// console.log(emptyArray);




// -------- Loops ------ repeatation

//3-- Types

// For Loop --- counter loop --
// While Loop --- conditional loop
// Do-while Loop --- conditional loop


// For Loop -- Counter Loop ---- known no. of counting --
// While Loop --- conditional loop -- unknown no. of counting --
// Do-while Loop --- conditional loop -- execute your code at least one time weather you condition is true / false



// For Loop

// for(initialization; condition ; inc/dec){
//     // loop body
// }



// for (var x = 0; x < 10; x++) {
//     console.log(x);//0 1  2 .....9
//                    // 0 0 0
// }

// console.log("Loop Executed");

// for (var i = 1; i <= 10; i++) {
//     console.log("Pakistan",i);

// }


var arr = ["Ali", "Ahmed", "Sana", "Saba", "Maryam", "Saima", "Samina", "  Sakeena", "tuba", "sobia"]

// write a program in javascript, say hello username , using loop and array



for (var i = 0; i < arr.length; i++) {
    console.log(`Hello ${arr[i]}`);
}