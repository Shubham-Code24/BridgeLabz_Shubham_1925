
const student={
    name : 'Arun',
    age : 18,
    "roll no" : 100,        // syntax error
    "sports played" :  ['cricket','badminton', 'chess']   
   }




        // printing keys of object

    for(let key in student){    // in each iteration it take one key from object in seq manner

        console.log(key);

    }

    console.log(); // for spacing
    


         // printing key value pairs

          // wrong method - using dot
         
        //  for(let key in student){

        //     console.log(student.key);     // undefined in every iter as it starting finding 'key' named key in student object and there is no such key
            


        //  }


         // correct method - bracket notation 


         for(let key in student){
           //  console.log(`${key} : ${student[key]}` );
             console.log(key, " : ", student[key]);
             
         }

         console.log();
         




         // M2 - Object.keys(obj_name) - It is an array of keys(strings) of the object passed as argument


         console.log(Object.keys(student)); 
         
         
         const arr = Object.keys(student);

         // to check array or not 

         console.log(Array.isArray(arr));   //  



         // now  We have to iterate in this array - for of loop 



         for(let key of Object.keys(student)){

            console.log(key, " : ", student[key]);
            
         }




         







         
         
         
         









        
         






    // Object 

















    



























