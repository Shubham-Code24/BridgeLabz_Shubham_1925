
// second largest elem 


let arr =[2, 7, 5, 9];



// let max= arr[0];
// let secMax = arr[0];




arr.sort();

console.log("arr : ", arr);


let m=arr[arr.length-1];
let sm=arr[arr.length-1];


let si = 0;

for(let i=arr.length-1; i>=0; i--){

    if(sm <= m){


        sm = arr[i];

       
    }

    if(sm < m){
        si = i;
        break;
    }


}



for(let i=arr.length-1; i>=0; i--){

    if(sm <= m){


        sm = arr[i];

       
    }

    if(sm < m)break;


}


let tm = sm;



for(let i=si; i>=0; i--){

    if(tm <= sm){


        tm = arr[i];

       
    }

    console.log("tm : ", tm);
    

    if(tm < sm)break;


}


console.log("m : ", m, " sm : ", sm, "tm : ", tm);




//function secLarElem(arr){





   

//     for(let i=0; i<arr.length; i++){

//         if(max < arr[i]){
//             max = arr[i];
//         }


        
//     }

//     console.log("max ", max);
    


//     for(let i=0; i<arr.length; i++){

//         if(secMax<max){
//             secMax = arr[i];
//         }



//         console.log("sec max : ", secMax);
        
//     }


// }

//     console.log(`max : ${max} sec Max : ${secMax}`);




























    