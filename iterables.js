


// // Part - 1 

// // Topic - Iterables

// // Iterables are those objects in which we can use for of loop 



// // for strings



// const firstName  = "Shubham";


// for(let char of firstName){

//     console.log(char);
    
// }



// // for Arrays

// let myArr = [1, 2, 3, 4, 5, , 2, 4];


// for(let val of myArr){

//     console.log(val);
    
// }




// // for objects 


// const myObj = {
//     name : 'Shubh',
//     rollNo : 12,
//     age : 28
// }


// // for(let val of myObj){     // TypeError: myObj is not iterable
// //     console.log(val);
    
// // }



// // Conclusion - Arrays, strings are iterable while object is not 





// *************************************************************






// Part - 2 


// Array Like Objects -> objects which have length property 
                        // we can access its elements by index 



let a = "hello";

console.log(a.length);

console.log(a[2]);

// => String is a array like object






// Set 

// set stores unique collection of values 
// no index based access
// order is not guaranteed
// it is iterable (for...of loop works on it )
// it is not array like object 


// create set 


// from array

const num = new Set([1, 2, 3]);   // In () of set we can write any iterable (arrays,strings etc) 

console.log(num);
console.log(num.size);


// from string 

const str = new Set("abc");

console.log(str);



// empty set 

const num1 = new Set();


console.log(num1);



// method of set 


// add(value) method

num1.add(1);
num1.add(2);
num1.add(2);

console.log("num1 : ", num1);   // { 1, 2 }   so dupl value not allowed  


const items = ['item1', 'item2'];


num1.add(items);


console.log("num1 : ", num1);
l












































