// ---- Functions -----

// syntax--- Function

// function FunctionName(){
// BLock of Code        
// BLock of Code        
// BLock of Code        
// BLock of Code        
// }


// FunctionName()//function calling


// function Display() {
//     console.log("Hello Girlsss...");

// }

// Display()



// ----------------- Function Types -------
// ❌ parameter but ✔ return Type ----✅
// ✔ parameter but ❌ return Type----✅
// ❌ parameter ❌ return Type----✅
// ✔ parameter but ✔ return Type----✅




// // --- no parameter no return ----


// function Food(){
//     console.log("I love to eat ....");

// }

// Food()



// --- with parameter but no return ----


// function Food(food, drink, salad) {
//     console.log(`I am here to eat ${food} and want ${drink} with it and have ${salad}.`);

// }

// Food("Biryani", "Cocacola", "Rassian Salad");
// Food("Tikka", "Fanta", "Indian Salad");





// --- with parameter with return ----


// function Food(food, drink, salad) {





//     return `I am here to eat ${food} and want ${drink} with it and have ${salad}.`


//     console.log("Tuba Jan");

// }

// var display = Food("Biryani", "Cocacola", "Rassian Salad")
// console.log(display);

// Food("Tikka", "Fanta", "Indian Salad");




// --- no parameter with return ----


// function Addition(){
//    return `we are here to add 2 + 6 = ${2+6}`
// //    return 2+6

// }

// var sum = Addition()
// console.log(sum);




// function Addition(num_1, num_2) {
//     return num_1 + num_2
// }

// var sum = Addition(18, 19)
// console.log(sum);


// ------ local vs Global ---- variable in Function -----


// var loginUser = "Sarah"//---global variable
// // accessable in all over program

// function getOut() {

//     var logOutUser = "Anas"//local variable
//     // life time just in {}
//     console.log(loginUser);
//     console.log(logOutUser);

// }

// getOut()


// console.log(loginUser);
// console.log(logOutUser);



// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------

// var userInput = prompt("Enter Your Percentage ...")


// function getGrade(percent) {

//     if (percent > 0 && percent < 100) {
//         if (percent >= 80 && percent <= 90) {
//             return "A+";
//         } else if (percent >= 70 && percent <= 80) {
//             return "A";
//         } else if (percent >= 60 && percent <= 70) {
//             return "B";
//         } else if (percent >= 50 && percent <= 60) {
//             return "C";
//         } else if (percent >= 45) {
//             return "D";
//         } else {
//             return "F";
//         }
//     } else {
//         alert("Invalid Input.....");
//     }


// }


// // var displayGrade = getGrade(userInput)
// // console.log(displayGrade);


// console.log(getGrade(userInput));


// -----------------------------------
// -----------------------------------
// -----------------------------------
// --- Switch staement ---------------
// =================================
// =================================

// var variable = ""

// switch(condition){
//     // case :1
//     // case :2
//     // case :2
//     // case :2

//     default :
// }