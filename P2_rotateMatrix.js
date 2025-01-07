

// Rotate a given N x N matrix 90 degrees clockwise in-place.
// Input Example:
// matrix = [
// [1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]

// ]

// Output Example:
// matrix = [
// [7, 4, 1],
// [8, 5, 2],
// [9, 6, 3]
// ]




// 2 steps problem 
// s1 - take transpose of matrix (swap a[i][j] with a[j][i])
// s2 - reverse each row 


let mat1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]



let rotMat1 = (mat1)=>{
    
    transpose_mat(mat1);

    console.log("After transpose of matrix : " );
    

    console.log(mat1);

    console.log();
    
    

    rev_rows(mat1);

    console.log("After reversing the rows of matrix : ");

    console.log(mat1);
    
    

    return mat1;
}



let transpose_mat = (mat1)=>{

    for(let i in mat1){

        for(let j in mat1[i]){

            if(i<j){
                swap(i, j, mat1);
            }
        }
    }
}


let rev_rows = (mat1)=>{

    for(let i in mat1){

        let j=0, k=mat1[i].length-1;

        while(j<k){
            let temp = mat1[i][j];
            mat1[i][j] = mat1[i][k];
            mat1[i][k] = temp;
            
            j++;
            k--;
        }
        
    }
}


function swap(i, j, mat){
    let temp = mat[i][j];
    mat[i][j] = mat[j][i];
    mat[j][i] = temp;
}


console.log(rotMat1(mat1));















