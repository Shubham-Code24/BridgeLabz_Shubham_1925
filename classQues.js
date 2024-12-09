

// reverse a string 

let a = "abcdef";




let rev  = "";


for(let i=a.length-1; i>=0; i--){

    rev+=a.charAt(i);

}






console.log(rev);


 


// let b = "pqrst";




// function revString(str){

//     let s = str.split("");   // return array 

//     s.reverse();  // array prototype method 


//     return s.join().replace(',', '');
// }




// console.log("rev String : ", revString(b));



// Duplicate values in array 


const myArr = [1, 2, 3, 3, 2, 4];

const mySet = new Set();


for(let val of myArr){

    mySet.add(val);

}

console.log("Duplicate values are : ");


for(let val of myArr){

    if(mySet.has(val)){
        mySet.delete(val);
    }
    else{
        console.log(val);

    }
}




// *********************************************************


let arr = [1, 2, -5, -7, 3, 2, -5, 0];




let min = arr[0], max = arr[0];
let sum = 0;

for(let val of arr){

    sum+=val;
    
    if(max < val){
        max = val;
    }
    if(min > val){

        min = val;

    }
}


console.log(`Sum is : ${sum}`);


console.log(`Maximun value is ${max} and minimum value is ${min}`);



let a1 = [];
let a2 = [];

for(let val of arr){

    if(val > 0){
        a1.push(val);

    }
    if(val < 0){
        a2.push(val);

    }

}


console.log(`+ve array : ${a1} and -ve array : ${a2}`);







// Union and Intersection 



let arr1  = [1, 2, 3];


let arr2 = [3, 4, 4, 5, 6];


let set1 = new Set(arr2);


let inArr = [];



for(let val of arr1){

    if(set1.has(val)){

        inArr.push(val);


    }
}


console.log(`Intersecting array is : `, inArr);


let unArr = [];

for(let val of arr1){

    if(set1.has(val)){

        unArr.push(val);
        set1.delete(val);


    }
    else{

        unArr.push(val);
    }

}



for(let val of set1){
    unArr.push(val);
}



console.log(`Union Array is : `, unArr);

















