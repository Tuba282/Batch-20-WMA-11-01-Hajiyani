// console.log("hello");

// var food = ["Rolls","Samoosa","Chatni"]
// console.log(food);


//nested revise
var names = ["Madiha", "Noori", [4, 6, 8, [true, null, undefined]]]
// console.log(names);

// console.log(names[1]); //index 1

// console.log(names[2][1]) //6

// console.log(names[2][3][1]); //null




// modify ---arry 
// var names = ["Madiha","Noori",[4,6,8,[true,null,undefined]]]
// names[0] = "Ayesha"
// console.log(names);


//nesdted modify
// names[2][3][2] = false
// console.log(names);


//array ---methods


// pop()   last main sy ek element delete krna
// var a = [4,65,7,89,53,7]
// console.log(a);


// a.pop();
// console.log(a);


// var array1 = ["A","B","C",5,4,6,7,0]
// array1.pop(); // ["A","B","C",5,4,6,7] length 7
// console.log(array1);



//method push() last sy koi element add krdo

// var array1 = ["A","B","C",5,4,6,7,0]

// array1.push(true)
// console.log(array1)


// array1.push(0)
// console.log(array1)


// array1.push("D");
// console.log(array1);

// array1.pop();
// array1.pop();
// array1.pop();
// array1.pop();
// console.log(array1)

// array1.pop();
// console.log(array1)


// var array1 = ["A","B","C",5,4,6,7,0]

//-------unshift() ->> 0 index per jo element hy usmain add
// array1.unshift("W") //0 
// console.log(array1)


// array1.unshift(0)
// console.log(array1)


// array1.unshift(true)
// console.log(array1)

// ------arraymethod  0 index delete ---shift()
var array1 = ["A", "B", "C", 5, 4, 6, 7, 0]

// array1.shift()
// console.log(array1)

// array1.shift()
// array1.shift()
// array1.pop()
// array1.pop()
// array1.pop()


var array1 = ["A", "B", "C", 5, 4, 6, 7, 0]
// console.log(array1);

// array1.unshift("w") // w, "A","B","C",5,4,6,7,0 

// array1.pop()  // w, "A","B","C",5,4,6,7

// array1.push("z") // w, "A","B","C",5,4,6,7 , z,

// array1.shift() // "A","B","C",5,4,6,7 , z,

// console.log(array1)


// splice() 3,7,"string"  ---->index , length -->deleteCount
// ------------3
// var arr = [1,2,3,4,5,6,7,8,9]
// arr.splice(2,5,true)
// console.log(arr)


// arr.pop()
// arr.pop()
// arr.pop()
// arr.pop()
// arr.push(0) 
// arr.push(7) 
// arr.push(8) 
// arr.push(9) 

// arr.splice(5,1,0) // 5 index arr , 1 length deletecount length , 0 change
// console.log(arr)


//--slice() copy bnany ky liy use hota , 2 arguments 
//--- slice(2,5) ---2 start index , last number is main exclude hoga 

// var arry = [3, null, true, undefined, 9]
// console.log(arry)


// arry.slice(1,4) // null, true, undefined
// console.log(arry);


// var newArry =  arry.slice(1,4) // null, true, undefined
// console.log(newArry);

//-----------2--------------------------------
// //--------8--------------------------------
// var a = [3,7,8,9,6,8,0,2,3,5,67,8,8]
// console.log(a)

// // var newA = a.slice(1,6) 
// // console.log(newA)


// ----------2-------------------------------
// var a = [3,7,8,9,6,9,0,2,3,5,67,8,8]
// var newB = a.slice(2,7) 
// console.log(newB) //8,9,6,8,0

// var newB = a.slice(2,5) 
// console.log(newB) //8,9,6


// const fruits = ['apple', 'banana', 'orange', 'grape', 'melon', 'kiwi', 'strawberry', 'peach'];
// // Indices:       0         1         2         3        4        5         6           7

// const result = fruits.slice(2, 7);
// console.log(result); 
// //orange', 'grape', 'melon', 'kiwi', 'strawberry


//----------------------------------------------------------



// Q1  create an array of your own choice, 
// Array elemts 7
// console array orininal result

// then pop() method apply                          
// then pop() method apply                         
// then unshift()                       
// then push()                                      
// then pop()                       
// then splice ()  center index 3-5         
// then slice  ()  center index 3-5             
// then push()                                      
// then unshift()                               
// then pop() method apply                          
// then slice  () original array copy               
// console result                                               