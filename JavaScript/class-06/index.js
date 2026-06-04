// ---- if/else

// --- Write a program to take number
//  user input and check weather it is even odd or Zero

// Logic Even (num % 2 == 0)

// var num = +prompt("Enter Any Number ..");

// if (num % 2 == 0) {
//   console.log("Even NUmber");
// }
// else if (num == 0) {
//   console.log(" Number is Zero");
// }
// else {
//   console.log("Odd NUmber");
// }

// ------------- Logical Operator - Value Return - --------------------
//  && Logical AND
//  || Logical OR
//  !  NOT

// --- write a program to check person age CNIC and person
// must be female

// var age = 0;
// var isFemale = true;

// if (age && isFemale) {

//      console.log("Nested before");

//     if (age > 18) {
//     console.log(" Eligible ");
//     alert(" Eligible For CNIC");
//     }
//     console.log("Nested After");

// } else {
//   console.log(" Invalid Input ");
// }

// marks > 90 = Grade A+
// marks > 80 = Grade A
// marks > 70 = Grade B
// marks > 60 = Grade C
// marks > 50 = Grade D
// marks < 50 = Grade Fail
//   Error Invalid input

// var marks = +prompt("enter your marks");

// if (marks <= 100 && marks > 0) {
//   console.log("Madiha");

//   if (marks >= 90) {
//     alert("Grade A+");
//   } else if (marks >= 80) {
//     alert("Grade A");
//   } else if (marks >= 70) {
//     alert("Grade B");
//   } else if (marks >= 60) {
//     alert("Grade C");
//   } else if (marks >= 50) {
//     alert("Grade D");
//   } else {
//     alert("Fail");
//   }

// } else {
//   alert("Invalid input - Marks must be between 0 - 100");
// }

// -----------------------------------------

// console.log(true && false);//false
// console.log(true && 'false' && false);//false
// console.log(true && 'false' && 123);//123
// console.log(true && 'false');//false
// console.log(true && ('false' || 0) );//'false' true
// console.log(true &&  123 || ("false" || 0) ); //'false' true

// console.log( 0 && ("abc" || undefined));

// var userIn = true;

// if (!userIn) {
//   console.log("User Out ");
// } else {
//   console.log("User In ");
// }

var CNIC = "yes";
var ref = "no";
var ispresent = true;

if (ispresent && (CNIC == "yes" || ref == "yes")) {
  console.log(" Allowed");
} else {
  console.log(" Not Allowed");
}


// console.log((CNIC == "yes" || ref == "yes"));
