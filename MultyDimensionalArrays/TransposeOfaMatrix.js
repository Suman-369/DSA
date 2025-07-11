//  Transpose Of A Matrix

let matrix = [[1,2,3],[4,5,6],[7,8,9]];

let ans = Array.from({length:matrix[0].length},()=>Array (matrix.length))

for(let i =0 ; i < ans.length; i++){
    for(let j = 0 ; j<ans[i].length;j++){
        ans[i ][j] = matrix[j][i];
    }
}

console.log(ans);

// Out Put 

// [ [ 1, 4, 7 ]
//  [ 2, 5, 8 ]
//  [ 3, 6, 9 ] ]


