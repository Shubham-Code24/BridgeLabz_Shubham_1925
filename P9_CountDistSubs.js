
// Using Recursion and Set 

let s = "abcabc";


function countSubseq(str){

    let res = new Set();   // empty set to store distict subsequences

    generateSubseq(s, "", res);

    console.log(res);

    console.log();
    
    

    console.log("No of distinct subsequences : ", res.size);
    


}



function generateSubseq(str, curr, res){

    // base case 
    if(str.length === 0){
        res.add(curr);
        return;
    }


    // exclude first character of string
    generateSubseq(str.substring(1), curr, res);


    // include first character of string
    generateSubseq(str.substring(1), curr + str.charAt(0), res)

}



countSubseq(s);

















