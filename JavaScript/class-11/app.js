// user input array with flag concept or break
// var array = ["Karachi", "Lahore", "Islamabad"]
// var city = prompt("Enter City : ")
// var flag = false;

// for (let i = 0; i < array.length; i++) {
//     if (city === array[i]) {
//         flag = true;
//         console.log(i + " Index  of  City name : " + city)
//         break;
//     }
// }

// if (flag == false) {
//     console.log("city nhi mila ....")
// }


//------------------------------------

// for (let i = 0; i <= 10; i++) {
//     for (let j = 0; j <= 10; j++) {

//     }
// }


/// nested problem hy theek krna hy
//-----------------------------------------
// var array1 = [3, 5, 7, 8]
// var array2 = ["A", "B", "C", "D"]

// var fullAray = []

// for (let i = 0; i <= 10; i++) {
//     for (let j = 0; j <= 10; j++) {

//         if (i == j) {
//             fullAray.push(array1[i] + " " + array2[j])
//             console.log(fullAray)
//         }
//         else {
//             console.log("condition nhi mili ");

//         }

//     }
// }

//------------------------------------------------------solution

// var array1 = ["A", "B", "C", "D"]
// var array2 = ["A", "B", "C", "D"]
// var fullAray = []

// for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array2.length; j++) {

//         if (i == j) {
//             fullAray.push(array1[i] + " " + array2[j])
//         }
//     }
// }
// console.log(fullAray)

//------------------------------------------------------------firstname with last name
// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];
// for (var i = 0; i < firstNames.length; i++) {
//     for (var j = 0; j < lastNames.length; j++) {

//         if (i == j) {
//             fullNames.push(firstNames[i] + lastNames[j]);
//         }
//     }
// }
// console.log(fullNames);

// //output :-
// ['BlueRay Zzz', 'Upchuck Burp', 'Lojack Dogbone', 'Gizmo Droop']


//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

// while loop syntax
// while (condition) {
//     // Code to execute
// }


// Condition check hoti hai.
// Agar condition true ho to code execute hota hai.
// Phir dobara condition check hoti hai.
// Jab condition false ho jaye to loop stop ho jata hai.

// --------------------------------------------------------------
// --------------------------------------------------------------

// let i = 1;

// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// //output:-
// 1
// 2
// 3
// 4
// 5


// i ki value 1 hai.
// Condition i <= 5 true hai.
// 1 print hua.
// i++ se value 2 ho gayi.
// Ye process tab tak chalta raha jab tak i 6 nahi ho gaya.
// 6 <= 5 false hua aur loop stop ho gaya.
//---------------------------------------------
//---------------------------------------------


//Print Even Numbers

// let num = 2;

// while (num <= 10) {
//     console.log(num);
//     num += 2; // i+=2 hota hy jasy btaya tha class main , i++ ka back i+=1
// }


// //output:-
// 2
// 4
// 6
// 8
// 10


// num ki starting value 2 hai.
// Har iteration ke baad 2 add hota hai.

//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------

//----- do while syntax

// do {
//     // Code to execute
// } while (condition);


// Pehle code execute hota hai.
// Uske baad condition check hoti hai.
// Agar condition true ho to loop dobara chalta hai.
// Agar condition false ho to loop stop ho jata hai.

// Difference: while loop mein condition pehle check hoti hai, jabke do...while mein code pehle ek baar zaroor execute hota hai.


//-----------------------------------------------------------
//-----------------------------------------------------------

// example 1 ------ Count 1 to 5

// let i = 1;

// do {
//     console.log(i);
//     i++;
// } while (i <= 5);  // constion check hogi yahn 

// //output:-
// 1
// 2
// 3
// 4
// 5

// // i ki value 1 hai.
// // do block pehle execute hota hai aur 1 print hota hai.
// // i++ se value 2 ho jati hai.
// // Condition 2 <= 5 true hai, isliye loop dobara chalta hai.
// // Ye process 5 tak chalta hai.
// // Jab i 6 hota hai to condition false ho jati hai aur loop stop ho jata hai.



//------------------------------------------------------------------------------
// let i = 1;
// 
// do {
    // console.log(i);
    // i++;
// } while (i <= 5);
// 
// 1
// 2
// 3
// 4
// 5

//----------------------------------------------------- -----------------------------------------------------

//  While Loop                                       | Do While Loop                                        |
//  ------------------------------------------------ | ---------------------------------------------------- |
//  Condition pehle check hoti hai.                  | Code pehle execute hota hai.                         |
//  0 ya us se zyada baar chal sakta hai.            | Kam az kam 1 baar zaroor chalta hai.                 |
//  Agar condition false ho to kuch print nahi hota. | Condition false ho tab bhi ek baar execute hota hai. |
//  Syntax: `while (condition) {}`                   | Syntax: `do {} while (condition);`                   |




//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------

// string methods
// .toLowerCase() >>>>> ismain sab small abc main convert hota hy
// .toUpperCase() >>>>> ismain sab big   abc main convert hota hy


// var name1 = "BuShRa"
// console.log(name1.toLowerCase());

//-------output:-
//bushra

//--------------------------------------------------userinut
// var name2 = prompt("Enter Name: ");
// console.log(name2.toLowerCase());

//-------output:-
//HaDia as a prompt -----output hadia


// ---------------------------------------------------------------------

// var name3 = "Sadia Rihana"
// console.log(name3.toUpperCase());

//-------output:-
//SADIA RIHANA

//--------------------------------------------------userinut
// var name4 = prompt("Enter Name: ");
// console.log(name4.toUpperCase());

//-------output:-
//Hadiiixaxsa as a prompt -----output Hadiiixaxsa

//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
