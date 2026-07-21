// console.log("Javascript")



//Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,

/*  multiple line comment*/

/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, */



// var fruits = "B"

// if (fruits == "Mango") {
//     console.log(fruits);
// }
// else if (fruits == "Banana") {
//     console.log(fruits);
// }
// else {
//     console.log("Invalid fruit");
// }

//__________________________________________

//Syntax

// switch (key) {
//     case value:
//         break;

//     case value:
//         break; 


//     default:

//         break;
// }



//var day = "Tuesday"  khud value pass ki hy
// var day = "Tuesday"



// var day = prompt("Enter Day: ")

// switch (day) {
//     case "Monday":
//         console.log("Today is Monday");
//         break;

//     case "Tuesday":
//         console.log("Today is Tuesday");
//         break;

//     case "Wednesday":
//         console.log("Today is wednesday");
//         break;

//     case "Thrusday":
//         console.log("Today is Thrusday");
//         break;

//     case "Friday":
//         console.log("Today is Friday");
//         break;

//     case "Saturday":
//         console.log("Today is Saturday");
//         break;

//     case "Sunday":
//         console.log("Today is Sunday");
//         break;

//     default:
//         console.log("Invalid...");
//         break;
// }


//Calculator

// var num1 = +prompt("Enter num1: ")
// var num2 = +prompt("Enter num2: ")
// var operator = prompt("+ - * /")
// var result;


// switch (operator) {
//     case "+":
//         result = num1 + num2;
//         console.log(result);

//         break;
//     case "-":
//         result = num1 - num2;
//         console.log(result);

//         break;
//     case "*":
//         result = num1 * num2;
//         console.log(result);

//         break;
//     case "/":
//         result = num1 / num2;
//         console.log(result);
//         console.log(Math.round(result));
//         break;

//     default:
//         console.log("Operator sahi nhi hy ...");
//         break;
// }

//__________________________________________

// syntax
// while (condition) {
// }

// for ky jasy
// for (var i = 0; i <= 5; i++) {
//     console.log(i);
// }


// 0 1 2 3 4 5
// var i = 0;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }



// var Uservalue = +prompt("Enter Number")

// while (Uservalue <= 5) {
//     console.log(Uservalue)
//     Uservalue++;
// }



// let password = +prompt("Enter Password : ")

// //-------5678   !---1234
// while (password !== 1234) {
//     password = +prompt("Enter again : ")
// }

// alert("login mil gaya")


//__________________________________________
/*  do while                            while


var i = 0;                |         var i = 0;
do {                      |         while (i <= 5) {   
    alert(i);             |             console.log(i);     
    i++;                  |             i++;                  
} while (i <= 3);         |          }                   

*/

// var i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i <= 5);


// var i = 0;
// do {
//     console.log(i);
//     i++;
// } while (0<0);


//-------------do while ky sth switch 

// let userChoice;
// do {
   
//     userChoice = prompt(
//         "=== 🍔 CAFE MENU CARD 🍔 ===\n" +
//         "1. Espresso - $3.50\n" +
//         "2. Avocado Toast - $7.00\n" +
//         "3. Blueberry Muffins - $4.00\n" +
//         "4. Exit Menu\n\n" +
//         "Please enter the number of your choice (1-4):"
//     );
 
//     switch (userChoice) {
//         case "1":
//             alert("☕ You ordered an Espresso! Coming right up.");
//             break;
//         case "2":
//             alert("🥑 You ordered Avocado Toast! Freshly prepared.");
//             break;
//         case "3":
//             alert("🧁 You ordered Blueberry Muffins! Warm from the oven.");
//             break;
//         case "4":
//             alert("👋 Thank you for visiting! Goodbye.");
//             break;
//         case null: 
//             alert(" Session closed. Goodbye.");
//             userChoice = "4";  
//             break;
//         default:
//             alert("❌ Invalid selection! Please choose a valid option from 1 to 4.");
//             break;
//     }
 
// } while (userChoice !== "4");