// Prompt ---- user Input

// console.log(prompt("What's your age"));

// --- getting string input
// var userName = prompt(" Enter Your name ...");
// var userID = prompt(" Enter Your ID ... ");
// console.log("Welcome " + userName + "With ID " + userID);

// --- getting Number input
// var num1= +prompt(" Enter first  Number ...");//10
// var num2= prompt(" Enter second  Number ...");//5

// console.log(num1 + num2);//
// console.log("Datatype of  num1 "+ typeof num1);
// console.log("Datatype of  num2 "+ typeof num2);

// Comparission Operators --answer (true/false)
//  == === != !== < > <= >=
//  = -> assignment operator

var Tuba = "234";
// == (value)
// console.log(5 == 5);//true
// console.log(5 == "5");//false❌ true✔
// console.log(true == "true");//false
// console.log("abc" == "abc");//true
// console.log(Tuba == "234");//

// === strict mode(value  datatype)
// console.log(5 === 5);
// console.log(5 === "5");
// console.log("abc" === "ABC");

// != !==
/*

console.log( 6 != 6);//false
console.log( 6 == 6);//true
console.log( 6 != "6" );//false
console.log("abc" !== "abc");//false
 
*/
//< > <= >=
// console.log(5 < 6);//true
// console.log(9 > 6);//true

// console.log(5 >= 6);//false
// console.log(5 > 5);//false
// console.log(5 >= 5);//true

// ------ If conditions ------
// syntax
// if (condition) {
//     // block of code
// }

// if (2 != 2) {
//     console.log("Correct Answer" , 2+2);

// }

// console.log("After Condition");
// console.log("After Condition");
// console.log("After Condition");
// console.log("After Condition");

var isplaced = true;

if (isplaced) {
  console.log("Thank you for Order ");
}

// truthy - value
// 1/-1  , " " , true , {} , []

// if([{}]){
//     console.log("Condition is true");

// }

// Falsey Values
// 0 , false , "" , null , undfined

// var userName = prompt("Enter your Name")
// if (userName) {
//   console.log("Executed successfully ...");
// }

// var order = +prompt("Enter Quantity ");//0
// if (order) {
//   console.log("Executed successfully ...");
// }


// var order = +prompt("Enter Quantity ");//0
// var inStock = 7;
// if (order <= inStock) {
//   console.log("Shampoo lelo  ...");
// }
// console.log("Bhai jaldi karo , closing time hai");



var city = prompt("Where you live in ");//0

if (city == "karachi") {
  console.log("Karachi wale ho ");
}
console.log("Pakistani");