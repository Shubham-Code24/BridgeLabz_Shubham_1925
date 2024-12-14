


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




let st = new Stack();

for(let i=2; i<17; i*=2){

    if(i==8)continue;

    st.push(i);
}


console.log(st);    // O/P -> Stack { items: [ 2, 4, 16 ] }



// Insertion at any index (assuming stack as 0-based indexing)



let idx = 2;   // means position 3 => stack elem get popped until 2 elem will remain in stack 
            // condn for poppin -> st.size()>2 until its true pop the elem 
let val = 8;

let temp = new Stack();   // to stor popped values 

while(st.size() > idx){

    temp.push(st.pop());

}

st.push(val);


while(temp.size() > 0){
    st.push(temp.pop());
}


console.log("After inserting "+ val + " at position "+ (idx+1) + " : " , st);














































































