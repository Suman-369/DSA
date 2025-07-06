// Calculate Sum Of Left arr and Right Arr i means in 2-D array calculate the value of element ## CrossWise 

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let leftSum = 0 , rightSum = 0 ;

for(let i = 0 ; i < arr.length ; i++){
    for(let  j = 0 ; j< arr[i].length ; j++){
        if(i ==j){
            leftSum += arr[i][j];  
        }
        if(i+j == arr.length-1){
            rightSum += arr[i][j];  
        }
    }
}

console.log("Left Diagonal Sum: " + leftSum);
console.log("Right Diagonal Sum: " + rightSum);


// OUTPUT 
// Left Diagonal Sum: 15
// Right Diagonal Sum: 15
