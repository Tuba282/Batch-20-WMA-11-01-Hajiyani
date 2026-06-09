// var name1 = "Salma";
// var name2 = "Miss Tuba";
// var name3 = "Miss Bushra";

// console.log(name1); 
// console.log(name2);
// console.log(name3);


///-----Array  [ , , , ]     multiple data type store ek single variable
// length 1 , index 0  
//1st method 
// var names = ["Ali", "Ahmed", "Sara"];
// console.log(names[0]); 

//2nd method 
// var name = new Array("Ali","Ahmed","Sara");
// console.log(name); 
// console.log(name[1]);  

// var  multiarray = ["Ali" , 5 , true , {} , [] , 458 , true , null];
// console.log(multiarray); 
// console.log(multiarray[0]);  //index 2 ---->true
// console.log(multiarray[2]);  //index 2 ---->true
// console.log(multiarray[7]);  //index 2 ---->true
// console.log(multiarray[1]);  //index 2 ---->true
// console.log(multiarray.length); //5

// console.log(multiarray[multiarray.length -1 ]); // null
// console.log(multiarray[multiarray.length -2]);  // true
// console.log(multiarray[multiarray.length -3]);  //458
// console.log(multiarray[multiarray.length -9]);  // undefine

//syntax last element of array get krny ka tareeqa
// console.log(multiarray[multiarray.length -1  ]); 


//nested

// var nestedarr = ["C" , 3 , 4 , ['A', 4, true]  , 657, {} , null, [5,44,3]];
// console.log(nestedarr);
// console.log(nestedarr[0]); 

// nested array  get krty hain.
// console.log(nestedarr[3][0]); //A
// console.log(nestedarr[3][2]); //true  isny get kia hy nested

// console.log(nestedarr[5]); //
// console.log(nestedarr[7][2]); //  3

// var numbers = [34 ,4,56,7,[7,6,7 , ["A",5,54 , [4,8,7] ] ],{}] 
// console.log(numbers);

// console.log(numbers[3]);
// console.log(numbers[4]);
// console.log(numbers[4][3][0]); //A
// console.log(numbers[4][3][3][2]); //7

// var food = ["Biryani" , "Burger" , 
//             ["Korma","Pizza",
//                 ["Sandwich","Karhai", 
//                     [ "Nihari"] 
//                 ] 
//             ] 
//            ]

// console.log(food);
// console.log(food[2][0]);
// console.log(food[2][2])
// console.log(food[2][2][2][0]); //Nihari


// var food1 = ["Biryani" , "Burger" ] 
// console.log(food1);


// var food2 = ["Biryani"] // string ky under bhi indexing sy 0 sy hi start hoti hy   
// console.log(food2);

// console.log(food2[0][0]); //B
// console.log(food2[0][1]); //B
// console.log(food2[0][2]); //B
// console.log(food2[0][3]); //B
// console.log(food2[0][4]); //B
// console.log(food2[0][5]); //B
// console.log(food2[0][6]); //B







