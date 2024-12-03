
// // Part - 1 (intro to Arrays)


// let vegetable = "cauliflower";   // to store single value 

// // Arrays -> data structure to store ordered collection of items(values)

// // eg -> to store a ordered collection of fruits 
// let fruits = ["apple", "banana", "grapes"];
// console.log(fruits);

// // ordered collection -> their positions/indexes are fixed 
// // we can access any value/item by its index

// console.log(fruits[0]);


// // to store ordered collections of numbers

// let numbers = [1, 2, 3, 4];
// console.log(numbers);


// // array indexing 


// // ** In JS, we can store values of different datatypes in array 


// let mixed = [1, 2, 3.7, "string", null, undefined]

// console.log(mixed);




// *****************************************************************************************





// // Part-2 


// // Note 1 - arrays are mutable 


// let fruits = ["apple", "orange", "banana"];

// fruits[1] = "mango";

// console.log(fruits);




// // Note 2 - Arrays are referenced type (every referenced type thing is a object)=> Arrays are objects 

// console.log(typeof fruits);  // object 


// // how to check a given object is array or not  -> isArray method 

// let obj = {};



// // rem we cant check by typeof operator as both are objects 

// console.log(typeof fruits);   // object
// console.log(typeof obj);   // object


// console.log(Array.isArray(fruits));   // true
// console.log(Array.isArray(obj));    // false    // obj is not array 




// ********************************************************************************


// Part - 3

// Method of array -> push pop shift unshift

// As arrays are mutable so we can change our original array with these methods 

let fruits = ["apple", "orange", "banana"];

console.log(fruits);

// push(value) - to add elem at the end

fruits.push("grapes");

console.log(fruits);


// pop() - to return and remove the last elem of array 

let poppedFruit = fruits.pop();

console.log(fruits);

console.log("popped fruit is ", poppedFruit);


// shift, unshift -> both works in starting 

// unshift -> to insert elem at the starting 

fruits.unshift("pineapple");

fruits.unshift("peach");

console.log(fruits);


// shift -> to return and remove elem at starting 

let removedFruit = fruits.shift();

console.log(fruits);


// Note 4 -> push pop are fast and shift unshift are slow 




// Part 4 (Primitive vs Referenced types)

// difference lies in how they stored inside memory (refer to documentation)

// primitive type -> they got memory in the stack 


let num1 = 4;
let num2 = num1;   // assigning num1 to num2 

console.log("Before incrementing num1");

console.log(`value of num1 is ${num1}`);
console.log(`value of num2 is ${num2}`);


num1++;

console.log("After incrementing num1");

console.log(`value of num1 is ${num1}`);
console.log(`value of num2 is ${num2}`);


// conclusion - primitive data types got the different memories in stack memory , changes in one doesnt reflect in other 


let n1 = [1, 2, 3, 4];

let n2 = n1;
console.log("Before incrementing n1");

console.log(`Array n1 is ${n1}`);
console.log(`Array n2 is ${n2}`);


n1.push(5);

console.log("After updating n1 : ");

console.log(`Array n1 is ${n1}`);
console.log(`Array n2 is ${n2}`);  // n2 is also updated 




// Rem - > PDT require less memory so we can easily store them in stack memory 
//         whereas RDT require more memory s0 we assign their memory at separate memory segment (Heap memory)





























