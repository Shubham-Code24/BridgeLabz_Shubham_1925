

// Median in array - Median is the middle value of a sorted array 

// If the array has odd number of elements, the median is the middle element. 
// If the array has an even number of elements, the median is the average of the two middle elements. 


// Key concepts -> 
// After every new integer coming from the stream, we have to update the median. 




// Brute force approach 

class FindMedianBrute{


    constructor(){
        this.nums = [];  // dynamic array tp store integers


    }


    add(num){

        this.nums.push(num);

        this.nums.sort();
    }



    getMedian(){

        const n = this.nums.length;

        if(n%2 !== 0){  // for array with odd no of elem
            return this.nums[(n-1)/2]
        }
        else{     // for array with even no of elem

            return( this.nums[n/2] + this.nums[n/2 - 1])/2;

        }
    }










}



let medFinder = new FindMedianBrute();


console.log(medFinder);

medFinder.add(5);

console.log(medFinder);

medFinder.add(2);

console.log(medFinder);

medFinder.add(4);

console.log(medFinder);

console.log(medFinder.getMedian());

medFinder.add(3);

console.log(medFinder);

console.log(medFinder.getMedian());

 medFinder.add(1);


 console.log(medFinder);

 console.log(medFinder.getMedian());
 


 medFinder.add(1.5);


 console.log(medFinder);

 console.log(medFinder.getMedian());
 

 
 medFinder.add(2.5);


 console.log(medFinder);

 console.log(medFinder.getMedian());
 
















