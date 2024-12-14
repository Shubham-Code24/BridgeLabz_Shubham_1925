



class Stack{

    constructor(){
        this.items = [];
    }


    


    push(value){

        this.items.push(value);

    }


    pop(){

        if(this.isEmpty()){
            return "Stack is Empty";
        }

        return this.items.pop();

    }



    peek(){

        return this.items[this.items.length-1];

    }



    isEmpty(){

        return this.items.length === 0;

    }



    size(){
        return this.items.length;
    }




}





















// // Part - 1




// // making object of Stack class


// let st1 = new Stack();

// // filling elem in stack st1


// for(let i=2; i<17; i*=2){

//     st1.push(i);
// }

// console.log("Orig stack : ", st1);


// // Reverse the stack


// let rt1 = new Stack();


// while(st1.size() > 0){

//     rt1.push(st1.pop());
// }


// console.log("Reverse stack is : ", rt1);




// // Move elem of one stack into another with same order 

//    // it requires a new stack rt2(reverse stack) in b/w 
   
//    // funda - reverse of reverse gives us orig order




//    let gt1 = new Stack();


//    //gt1 is the reverse of reverse stack rt1
   
   
//    while(rt1.size()>0){

//     gt1.push(rt1.pop());

//    }


//    console.log("Cloned stack : ", gt1);




   // Part - 2



   // Reverse the order in Orig stack 

   // now orig stack st1 is empty so fill it again


   let st2 = new Stack();


   for(let i=2; i<17; i*=2){
    st2.push(i);

   }


   console.log("Orig order in st2 : ", st2);



   // Reverse order in st1 - we need 2 stacks - rt2(reverse stack) and gt2(cloned stack)


   // st2 -> rt2
   // rt2 -> gt2 
   // gt2 -> st2 (reverse elem in orig stack)
   
   

   let rt2 = new Stack();
   


   while(st2.size() > 0){
      rt2.push(st2.pop());
   }


   let gt2 = new Stack();


   while(rt2.size() > 0){
       gt2.push(rt2.pop());
   }


   while(gt2.size() > 0){
      st2.push(gt2.pop());
   }


   console.log("Reverse order in orig stack : ", st2);














   

   




   






































