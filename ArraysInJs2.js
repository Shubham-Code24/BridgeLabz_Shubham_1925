
// // Part-1 

// // To clone 2 arrays 


// let arr1 = ["hello", "hi"];    // arr1 -> referenced type var 

// let arr2 = arr1;   // ref gets copied so both points to same obj in heap 

// // we can check it as well

// console.log(arr1 === arr2);// true 

// // Note1 -> arr1 and arr2 are 2 different names of same array so arr1 doesnt clone here


// let a1 = ["hello", "hi"];

// let a2 = ["hello", "hi"];

// // a1 and a2 looks similar as data is same in both arrays but both are diff obj in heap 

// console.log(a1 === a2);  // false

// a1.push("namaste");

// console.log("array a1 : ", a1);
// console.log("array a2 : ", a2);  // a2 doesnt affect with change in a1




// ***********************************************************************








// Part-2

// methods of cloning 

// using slice method - returns new array object from the given index as argument

let a1 = ["item1", "item2"];

let a2 = a1.slice(0);    // a2 is clone of a1

console.log(a1);
console.log(a2);

console.log(a1 === a2);   


// M2 -> make empty array and concat the array to be cloned - using concat(array) method

let a3 = [].concat(a1);

console.log(a3);



// ** M3 -> using spread operator    // most used method as easy syntax 


let a4 = [...a1];

console.log("array a4 : ", a4);



// **********************************************************************




// Part-3 

// Concat more items while making clone 


// M1 - slice(index)    


let num1 = [1, 2, 3, 4];


let num2 = num1.slice(0).concat([5, 6, 7, 8]);

console.log("Array num2 is : ", num2);




// M2 - concat(arr1, arr2, ....) method


let num3 = [].concat(num1, [5, 6, 7, 8]);

console.log("After 1st concat : ");

console.log("array num3 is : ", num3);







// M3 -> spread operator 


let num4 = [...num1, 5, 6, 7, 8]

console.log("orig num4 is : ", num4);



// 2nd way 

let concatPartArray = [5, 6, 7, 8];

let num5 = [...num1, ...concatPartArray];

console.log("Array num5 is : ", num5);










































































