// Its A leetcode problem  question no 48 Rorate Image  ** constraints are DO NOT alocate extra array to rotation 

// The Soln :   First of all Rotate = Transpose + revarse   ** means we perform a two operation for this problem firts of the transpose here we do the swap between the row ans column element
//              then reverse the row element 


let arr = [[1,2,3],[4,5,6],[7,8,9]];

for(let i = 0 ; i< arr.length ; i++){
    for(let j = i ; j<arr[i].length ; j++){
        // Swap the elements
        let temp = arr[i][j];
        arr[i][j] = arr[j][i];
        arr[j][i] = temp;
        
    }
}

for(let i = 0 ; i <arr.length ; i++){
let k = 0 ;j = arr.length -1;
while(k<j){
   let temp  =  arr[i][k]
    arr[i][k] = arr[i][j]
    arr[i][j] = temp
    k++;    
    j--;
}
}


console.log(arr);
