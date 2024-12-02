
// // Q1  


const args = process.argv;

let n1 = args[2];


let i = 0;    // loop index variable

while(Math.pow(2, i) <= 256 && i <= n1){

    console.log(Math.pow(2, i));

    i++;
    
}




// // Q2

let low  = 1;
let high = 100;

let magic = 22;   // no given by user


// Our target is to reach to this magic value by reducing our search space to half in every iteration 
// a simple binary search problem

while(low <= high){

    let mid = Math.floor((low+high)/2);    // no we get in our searching

    console.log(`Is your number is ${mid}`);
    

    if(mid == magic){
        console.log(`Magic number is ${mid}`);
        break;
        
    }
    else if(mid > magic){

        console.log("Guess a lower no");

        high = mid-1;
        
    }
    else{   // here mid < magic

        console.log("Guess a higher no");
        

        low=mid+1;

    }
    
}




// Q3 


let countHead = 0;
let countTail = 0;

while(countHead < 11 && countTail < 11){  // either of conditions becomes false we have to over the game 

    let r = Math.random();

    r < 0.5 ? countHead++ : countTail++;
    console.log(`Random no is ${r}, head count is ${countHead}, tail count is ${countTail}`);
    

}

console.log("Final Solution : ");

console.log(`Head count is ${countHead} and Tail count is ${countTail}`);





// Q4 


let money = 100;

let countBets = 0, countWon = 0;

while(money!=0 && money!=200){

    countBets++;

    if(Math.random() < 0.5){  // he won bet

        countWon++;
        money++;

    }
    else{   // he lost bet 

        money--;

    }
}

console.log(`After bet, money : ${money}, No of bets : ${countBets}, No of bets won : ${countWon} `);
















