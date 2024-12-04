


// forEach method 


const numbers = [1, 2, 3, 4 ,5, 6, 7, 8, 9, 10];


// numbers.forEach( function (item){

//     console.log(item);
// } )



// numbers.forEach( (item) => {

//     console.log(item);

// } )


// numbers.forEach( (item) => (console.log(item)) )




// numbers.forEach( (item, index) => (console.log(`${index} : ${item} `))  )




// numbers.forEach( (item, index, arr) => ( console.log(`${index} : ${item} : `, arr) ) )




// numbers.forEach( (num) => {
//     if(num>4){
//         console.log(num);
//     }
// } )




//*************************  forEach method doesnt return anything 


// const res = numbers.forEach( (num) => {

//     console.log(num*10);
    
// } )


// console.log(res);




// filter method 


let resNums = numbers.filter( (num) => {

     return num>4


} )

 console.log(resNums);


resNums = numbers.filter( (num) => num<4 )


console.log(resNums);






