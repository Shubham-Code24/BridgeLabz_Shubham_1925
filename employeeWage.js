

// useCase1

function generateRandom(){

    return Math.random();
}



let isPresent = ()=>{

    if(generateRandom() > 0.5){

        return true;

    }
    else{

        return false;
    
    }


}


if(isPresent()){
    console.log(`Given employee is Present`);
    
}
else{
    console.log(`Given employee is Absent`);
    //return;
}










// UC 2 


const perHourWage = 20;

let dailyWage = 0;    



function calculateDailyWage(time){

    return time*perHourWage;


}


let jobType  = Math.floor(generateRandom()*3)+1;  // 3 possible values - 0(no time), 1(part time), 2(full time)


// console.log("job type is ", jobType);  // for debug 

let times = [0, 4, 8];    // times of different job type 

switch(jobType){

    case 0 :
        console.log(`Its a no time job`);
        dailyWage = calculateDailyWage(times[0]);
        break;

         
    case 1 :
        console.log(`Its a part time job`);
        dailyWage = calculateDailyWage(times[1]);
        break;

    default :
        console.log(`Its a full time job`);
        dailyWage = calculateDailyWage(times[2]);
        
        
}


console.log(`Daily wage of employee is : $${dailyWage}`);





// UC 3 


function calculateWorkHours(){ 

    return times[jobType];
}

console.log(`Working Hours of given employee is : ${calculateWorkHours()}`);







// UC 4 

// wages for month 

const workingDays = 20;


function calculateMonthlyWage(){

    let a = workingDays*calculateDailyWage(calculateWorkHours()); 
   //  console.log(`a is ${a}`);      // for debugging 
    return a;
    

}


console.log(`Monthly wage of given employee is $${calculateMonthlyWage()}`);

























