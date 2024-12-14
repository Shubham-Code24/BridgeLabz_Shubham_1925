

// Stack methods - push(), pop(), peek(), isEmpty(), size()



class Stack{

    constructor(){
        this.items = [];
    }


    push(value){
        this.items.push(value);

    }


    pop(){

        if(this.isEmpty()){
            return "Given stack is empty!";
        }

        return this.items.pop();

    }


    peek(){
        return this.items[this.items.length-1];

    }


    isEmpty(){
        return this.items.length===0;

    }



    size(){
        return this.items.length;
    }



}





let st = new Stack();      // creating empty stack object 

console.log(typeof st);

for(let i=1; i<=5; i++){
    st.push(i);
}





console.log("st : ", st);


console.log();



// push()


st.push(6);

console.log("st after push : ", st);

console.log();


// pop()


console.log("popped element : ", st.pop());


console.log("st after pop : ", st);


console.log();




// peek()


console.log("peeked element : ",st.peek());

console.log("st after peek : ", st);


console.log();


// isEmpty()


console.log(st.isEmpty());








// Part - 2 



let st2 = new Stack();


console.log(st2.pop());    // pop operation in empty stack - undefined (as no value presnt to get popped out)

















































