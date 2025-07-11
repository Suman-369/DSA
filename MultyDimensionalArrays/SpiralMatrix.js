

// leet Code Problem No 54 Spiral Matrix

let matrix = [
    [ 1,  2,  3,  4],
    [ 5,  6,  7,  8],
    [ 9, 10, 11, 12]
];

if(matrix.length === 0 ) {
    console.log([]);
    
}

let result = []
let top = 0 
let bottom = matrix.length-1
let left = 0 
let right = matrix[0].length-1

while(top <= bottom && left<=right){
   // Traverse top row
    for(let i = left ; i<=right;i++){
        result.push(matrix[top][i])
    }
    top++
    // Traverse right column
    for(let i =top ;i<=bottom;i++){
        result.push(matrix[i][right])

    }
    right--

     // Traverse bottom row
    if(top<=bottom){
        for(let i = right ; i>=left;i--){
            result.push(matrix[bottom][i])
        }
        bottom--
    }

     // Traverse left column
    if(left <= right){
        for(let i = bottom ; i>=top;i--){
            result.push(matrix[i][left])
        }
        left++
    }
}


console.log(result);



// OUT PUT [ 1,  2,  3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
