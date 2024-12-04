

// // Part 1 -> use const for creating array 



// // primitive type 

// const pi = 3.14;

// console.log(pi);  // 3.14 


// // cant reassign value to const var 

// // pi = 14    // typeError 



// // now with array 

// const fruits = ["apple", "mango"];

// fruits.push("pineapple");    // so push is able to manipulate fruits array so what const is doing 

// console.log(fruits);

// // concept - main array is stored in heap memory and fruits variable is a ref var stores base address of fruits array (lets say 0x11)

// // we cant change the base address in that ref var by making it const 


// fruits = ["banana", "grapes" ];    // type error


// // with const declaration in array we can manipulate array with push pop concat etc methods but it will point to only original array object 

// ********************************************************









// // Part-2 - lets do same thing with let

// let fruit1 = ["apple", "mango"];

// fruit1.push("pineapple");    // so push is able to manipulate fruits array so what const is doing 

// console.log("Before reassign : ", fruit1);

// //Reassigning 

// fruit1 = ["banana", "grapes"];

// console.log("After reassign : ", fruit1);






// *************************************************************************





// Part 3 -> Arrays Destructuring   

const myArr = ["val1", "val2"];


// Task - Store diff values of array in different variables 

// M1 

let myvar1 = myArr[0];
let myvar2 = myArr[1];

console.log(`myvar1 : ${myvar1} , myvar2 : ${myvar2}`);

// M2  (JS gives us a shortcut for this) - Destructuring of array 


let [var1, var2] = myArr;    // assigning array to destructured array 

console.log(`var1 : ${var1} , var2 : ${var2}`);


// now we can use var1 and var2 as normal let declared variables 



































































