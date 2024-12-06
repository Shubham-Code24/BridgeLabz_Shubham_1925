
// // const person = {name : "Shubh", rollNo : 1};

// // more readable format

// const person = {
//     name : 'Shubh',
//     rollNo : 1,
//     hobbies : ['table tennis', 'music listening', 'running']       // can store array as value inside object 
// }

// // printing object by its ref 
// console.log("person object : ", person);

// // data type 
// console.log(typeof person);    // object 



// person.gender = "Male";

// person.age;

// console.log("person object after adding key value pair  : ", person);


//      // using bracket 


// person['maritalStatus'] = 'unmarried';



// console.log("person object after adding key value pair from bracket notation  : ", person);


const student={
    name : 'Arun',
    age : 18,
    "roll_no" : 100,        // syntax error
    "sports played" :  ['cricket','badminton', 'chess']   
   }
   

   console.log("Student obj : ", student);




// using bracket 


// student['key'] = "arun121@gmail.com";

// console.log(student);


// O/p
// {
//     name: 'Arun',
//     age: 18,
//     roll_no: 100,
//     'sports played': [ 'cricket', 'badminton', 'chess' ],
//     key: 'arun121@gmail.com'    // still key comes not email as key 
//   }




