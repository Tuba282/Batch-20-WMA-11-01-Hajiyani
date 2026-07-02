// ------ forloop nested -------

var count = 10

// for (i = 1; i <= count; i++) {
//     // console.log('Noori '+ i);
//     console.log(`Noori ${i}`);


// }


// var firstNames = ['Sana', 'Ahmed', 'Ayesha', 'Fatima']
// var lastNames = ['Sohail', 'raza', 'Bano', 'Asad']


// // console.log(firstNames.length);

// for (var i = 0; i <= firstNames.length - 1; i++) { // i = 1 , i = 2 ,i=3 , i= 4
//     //    --1 

//     for (var j = 0; j <= lastNames.length - 1; j++) { // j = 4 , j = 8 , j= 12  , j= 16

//         // console.log(`${firstNames[i] } ${i} --- ${lastNames[j] } ${j}`); // -- 

//         if ( i === j){
//            console.log(`${firstNames[i] } ${i} --- ${lastNames[j] } ${j}`); // -- 

//        }



//     }


// }





// ---------------- first + middle + last names combine put new array ---------

// var firstNames = ['Sana', 'Ahmed', 'Ayesha', 'Fatima']
// var middlenames = ['Kamran', 'Ali', 'Noor', 'Muhammad'];
// var lastNames = ['Sohail', 'raza', 'Bano', 'Asad']
// var fullNames = []

// var count = 0
// // console.log(firstNames.length);

// for (var i = 0; i <= firstNames.length - 1; i++) { // i = 1 , i = 2 ,i=3 , i= 4
//     //    --1 

//     for (var j = 0; j <= middlenames.length - 1; j++) { // j = 4 , j = 8 , j= 12  , j= 16


//         for (var k = 0; k <= lastNames.length - 1; k++) { // k = 16 , k = 32 , k = 48  , k = 64
//             count++;

//             if (i === j && j === k) {

//                 console.log(`${firstNames[i]} ${i} --- ${middlenames[j]} ${j} --- ${lastNames[k]} ${k}`);
//                 fullNames.push(`${firstNames[i]} ${middlenames[j]}  ${lastNames[k]} `)
//             }
//         }



//     }


// }

// console.log(count);
// console.log(fullNames);




// --------------------------- Changing case -----------------

// var str = "We ARE Ready To Go On Picnic !!"

// console.log(str);

// console.log(str.toLocaleUpperCase());
// console.log(str.toLocaleLowerCase());


// ---------------- String Concept -----------------

// var name = "SMIT"
//  convert this word SMIT into Saylani Mass IT Training using nested for loop


// ---------------------- Strings: measuring length and extracting parts


// var str = "We are here to celebrate your Success ! , we are so proud of you ."

// console.log(str.length);

// for (var i = 0; i <= str.length - 1; i++) {

//     // console.log(str[i]);

// }


// ---- OldWay

// var extractWord = str.slice(30,38)
// var newStr = str.slice(0,29) + " Victory" +  str.slice(39)
// console.log(newStr);


// /---- NewWay to extract from String ----

var str = "We are here to celebrate your Success ! , we are so proud of you ."


var newStr = ''


for (var i = 0; i <= str.length - 1; i++) {


    if(str.slice(i,i+7)  === "Success"){
        newStr = str.slice(0,i) + " Victory " + str.slice(i+7)
    }
  

}

console.log(newStr);
