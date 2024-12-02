


// 1

// single digit means 0 to 9 

console.log(Math.floor(Math.random()*10));   



// Q2

// math.random() - b/w 0 and 1
// *6  - any real no from 0 to 6 exclusive 6
// take floor -> natural no from 0 to 5
// +1 -> natural no from 1 to 6

console.log(Math.floor(Math.random()*6)+1);




// Q3

let dice1 = Math.floor(Math.random()*6)+1;

let dice2 = Math.floor(Math.random()*6)+1;

function add(a, b){
    return a+b;
    
}

console.log(add(dice1, dice2));



// Q4


let sum = 0;

// 2 digit no - 10 to 99

// Math.random - 0 to 1
// see the min value -> 10 
// so on final floor value range from 0 to some no we are going to add 10
// => *90 to get range from 0 to 89 after floor method
// on add 10 -> 10 to 99



for(let i=0; i<5; i++){

    let r = Math.floor(Math.random()*90)+10;
    
    sum+=r;

}


let avg = sum/5;

console.log(`Sum is ${sum} and average is ${avg}`);










