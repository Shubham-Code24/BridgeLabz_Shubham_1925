


// UC 1 


function generateRandom(){

    return Math.random();
}




const isPresent = () => generateRandom() > 0.5


console.log(`Given employee is ${isPresent() ? "Present" : "Absent"}`);

console.log();  // for spacing



// ****************************************************************************




// UC 2 


const perHourWage = 20;


const jobTimes = {

    No_Time : 0,
    Part_Time : 4,
    Full_Time : 8

}





// fxn to calculate daily wage of given employee

function calculateDailyWage(hours_worked){

    return hours_worked*perHourWage;

}




const jobType = Math.floor(Math.random()*3);   // 0 : No_Time , 1 : Part_Time, 2 : Full_Time



// to get array of keys in jobTimes object to access it later on by index 'jobType'

const jobTimes_Keys = Object.keys(jobTimes);     // its a array 




console.log(`Job type of given employee is : `);


// using switch case statement

switch(jobType){

    case 0 :
        console.log(`Its a no time job `);
        break;
    
    case 1 :
        console.log(`Its a part time job `);
        break; 
    
    case 2 :
        console.log(`Its a full time job `);
        break; 


    default :
        console.log(`Invalid job type`);
   
    
}

console.log();  // for spacing 



const dailyWage = calculateDailyWage(jobTimes[jobTimes_Keys[jobType]]);

console.log(`Daily wage of employee is : ${dailyWage}`);








// UC - calculate monthly wage 


const per_Month_Working_Days = 20;


function calculateMonthlyWage(workingDays, dailyWage){

    return workingDays*dailyWage;

}


const monthlyWage = calculateMonthlyWage(per_Month_Working_Days, dailyWage);


console.log(`Monthly wage of employee is : ${monthlyWage}`);



console.log();






// UC 6   -  Calculating conditional wage 



const Max_Days = 20;
const Max_Hours = 100;  



function calculateConditionalWage(perHourWage, Max_Hours, Max_Days){

    let totalHrs = 0;
    let totalDays = 0;


    while(totalHrs<100 && totalDays<20){

        totalDays++;

        totalHrs+= jobTimes[jobTimes_Keys[jobType]];
    }


    return perHourWage*totalHrs;






}


const conditional_Wage =  calculateConditionalWage(perHourWage, Max_Hours, Max_Days);



console.log(`Conditional wage of employee is ${conditional_Wage}`);



// *************************************************************************************  





// // uc - 7 


// // making a array of objects 



// const month= ["January","February","March","April","May","June","July",
//               "August","September","October","November","December"];


// const user_Monthly_Data = [];

// const yearlyWage  = 0;
// const yearlyHours = 0;



// function calculateYearlyWage(){

//     for(let i=1; i<=12; i++){


//         yearlyWage+=

//         user_Monthly_Data.push({
//             Serial_No : i,
//             Months : month[i-1],
//             Monthly_Wage : calculateMonthlyWage(per_Month_Working_Days, dailyWage);
    
//         })
//     }
    


// }






























































































// 







