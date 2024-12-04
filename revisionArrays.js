



let veg = "tomato";  // primitive type variable


let veggies = ["tomato", "onion"];   // referenced type variable

console.log(veggies);



// arrays mutable 

veggies[1] = "cucumber";

console.log(veggies);


// push pop 

veggies.push('onion');

console.log(veggies);


// pop 

veggies.pop();
console.log(veggies);

// unshift

veggies.unshift("onion");

console.log(veggies);


veggies.shift();

console.log(veggies);



// clones


let a1 = [1,2 ,3];

let a2 = [1, 2, 3];

console.log(a2 === a1);  // both are different objects so get false 
// => a1 and a2 are clones 



// cloning methods

// m1 - slice(idx)

let a3 = a1.slice(0);

console.log("a3 : ", a3);


let a4 = [].concat(a1);

console.log("a4 : ", a4);


let a5 = [...a1];

console.log("a5 : ", a5);




// adding items while making clone 


let b1 = [0, 1, 2];  // orig arr 

// m1 slice

let b2 = b1.slice(0).concat([3, 4, 5]);

// m2 concat(arr1, arr2, ....)

let b3 = [].concat(b1, [3, 4, 5]);


// m3 spread operator 

let b4 = [...b1, 3, 4, 5];


console.log("b1 , b2, b3, b4 : ", b1, b2, b3, b4);






















