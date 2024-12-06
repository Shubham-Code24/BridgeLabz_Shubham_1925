




// Part 1 -> computed properties 


const key1 = "objkey1";

const key2 = "objkey2";


const value1 = "myvalue1";

const value2 = "myvalue2";



// Required Object - 

// const obj = {
//     objkey1 : "myvalue1",
//     objkey2 : "myvalue2"
// }


// making key value pairs of object from variables

// M1 - using computed properties - writing key var in square bracket to access value of that variable as key is computed prop
const obj = {
    [key1] : value1,
     [key2] : value2
}


console.log("obj : ", obj);



// M2 - direct pushing in empty object

obj1 = {};

obj1[key1] = value1;
obj1[key2] = value2;

console.log("obj1 is : ", obj1);








     
