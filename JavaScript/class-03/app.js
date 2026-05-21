// alert
// ilegal - ilegal variable names
// variable for string and number
// convensions
// Datatypes
// Math expressions - familiar (- + * / %)
// concatenation +  number / string "Tuba " + "Jan" - Tuba Jan

// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ---- Math Expressions: unfamiliar operators
// unary operators ++ (increament by 1) -- (decreament by 1)

// var a = 3;
// console.log(++a); // a + 1 = 4
// console.log(--a); // a - 1 = 3

// a++ -- post increment
// ++a -- pre increment
// a-- -- post decrement
// --a -- pre decrement

// var a = 3;//4
// console.log(a++);//3
// console.log(a++);//4
// console.log(a);//5

// 1. value de raha hai - a
// 2. a me 1 add kar araha ha

// var x = 4;//5

// console.log(++x);//5✔ - 4

// var y = 4;//2
// console.log(y--);// 4
// console.log(y);//3

// console.log(--y);//2
// console.log(y);

// var a = 10;//11
// var exp = a++ + --a - a++;
// //        10  +  10 - 10
// console.log(exp);//10
// console.log(a);//11

// var a = 7; //7
// // var exp = a++ + ++a - a-- + --a;
// //        7   +  9  - 9   + 7

// var a = 7; //6
// var exp = a-- + a++ - --a + ++a + a-- - --a - a++;
// //        7   + 6   -  6  + 7   + 7   -   5 -  5
// console.log(exp); //11
// console.log(a); //6

// a = 7;//5

// exp1 = --a + --a + ++a - a-- + --a + a++ + a++ - --a;
// //     6   + 5  + 6    - 6   + 4   + 4   + 5   - 5
// // 19 - 5

// // a = 5//3
// exp2 = a-- + --a + a++ - --a + --a + ++a + a++ - --a;
// //     5   + 3   + 3   - 3   +  2  +  3 +   3  -  3

// console.log(a);//3
// console.log(exp2);//13

// ----------------------
// ----------------------
// ----------------------
// ----------------------
// --- Math Expressions: eliminating ambiguity

// var exp = 1 + 8 * 8 ;
// console.log(exp);//65

// var exp = (1 + 8) * (8 + 2) / 9;
// // 9 * 10 / 9
// // 90 / 9
// console.log(exp); //10

// var a = 7 ;//8
// //  () ---> ++/-- --->  ** --->  */% --> + -
// var exp = (a-1) / (8+2) * 3**2 + a++;
// // 6 / 10 * 9 + 7;
// // 6 / 90 + 7;
// console.log(exp);




// var exp = 9 - 3 * ( 8 + 4 ) + 7*4 / (3**2);
// // 9 - 3 * 12 + 7*4 / 9;
// // 9 - 36 + 28 / 9; 
// // 9 - 36 + 3.111; 
// // 9 - 39.11;
// //-23.88;
// console.log(exp);


// ------- prompt (user se input)

var City = prompt("What is your City Name?");
console.log(City);





