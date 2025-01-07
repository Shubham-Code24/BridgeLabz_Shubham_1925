

class Frequency_Stack{



    constructor(){
 
        this.item = new Map();

        // console.log(this);  // for debug

        this.res = [];

        
        
    }


    push(val){
        let hm = this.item;
       hm.set(val, hm.get(val)+1 || 1 );
    }


    pop(){
        // elem with highest freq gets popped out
        let hm = this.item;

      
        let maxFreq=0;
        let maxFreqKey;

        for( let [key, value] of hm){
            let freq = 0;
            if(hm.get(key)>=maxFreq){
                maxFreq = hm.get(key);
                maxFreqKey = key
            }
            
        }

        this.res.push(maxFreqKey);



        if(hm.get(maxFreqKey)!== 1){
            hm.set(maxFreqKey, hm.get(maxFreqKey)-1);
        }
        else{
            hm.delete(maxFreqKey);

        }



    }






    
}



let st = new Frequency_Stack();


st.push(5);

st.push(7);

st.push(5);

st.push(7);

st.push(4);

st.push(5);


console.log(st);


st.pop();
st.pop();
st.pop();
st.pop();

console.log("Popped elements : ", st.res);






















