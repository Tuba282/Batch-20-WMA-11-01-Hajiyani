/*
 ----for loop -------- counter loop , exact count

syntax

for(condition){
    body...
    }

    for (i = 0; i <= 10; i++){
    console.log(i);
    }
    */



// i++ updation / increment
// i-- decrement


//---1----10---console
// for (i = 0; i <= 10; i++) {
//     console.log(i);
// }


// array ka count agr dena hy to ) sy start ho ga
// for (let x = 0; x < 10; x++) {
//     console.log(x)
// }


// ui
// for (i = 0; i <= 10; i++) {
//   document.writeln(i)
// }



// for (let index = 0; index <= 10; index++) {
//     console.log(index);
// }



// ---variable ky sath for loop
// var count = 50;
// for (i = 20; i <= count; i++){
//     console.log(i)
// }


// -----i+=1 ---i++----
//-----variable ky through count lia hy for loop ka 
// var countStart = 0;
// var countEnd = 20;
// for (i = countStart; i <= countEnd ; i+=1){
//     console.log(i)
// }


//user input
// var Start = +prompt("Enter Start Number: ");
// var End = +prompt("Enter End Number : ")

// for (let i = Start; i <= End; i++){
//     console.log(i);
// }



// for (let i = Start; i <= End; i++) {
//     document.writeln("<br> " + i);
// }


// for (let i = 0; i <= 34; i++) {
//     document.writeln("<br> " + i);
// }

// ---------------------------------

// var tableStart = +prompt("Enter Start Number");
// var tableEnd   = +prompt("Enter End Number");

// for (let i = tableStart; i<= tableEnd; i++  ){
//     console.log(tableStart + "x" + i + "=" + (tableStart * i ));
// }


//----------------------------
// for (let i = 1; i<= tableEnd; i++  ){
//     // 2 x 1 = 2
//     console.log(tableStart + " x " + i + " = " + (tableStart * i ));
// }

// ------------------
// var array = ["A", "B", "C"]
//var array = ["Ayesha", "Bashair", "Cola"]

// for (let i = 0; i <= 2; i++) {
//     console.log(array[i] + " " + i)
// }


// user input array with flag concept or break
// var array = ["Karachi", "Lahore", "Islamabad"]
// var city = prompt("Enter City : ")
// var flag = false;

// for (let i = 0; i < array.length; i++) {
//     if (city === "Karachi") {
//         console.log(i  + " City name : " + city)
//         flag = true;
//         break;
//     }
//     else {
//         console.log("nhi mila ....")
//     }
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




