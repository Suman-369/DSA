let prompt = require('prompt-sync')();

let arr = new Array(3);

for(let i = 0 ; i<arr.length ; i++){
    let size = Number(prompt("Enter inner array  size "))

    arr[i] = new Array(size);
}

for(let i = 0 ; i<arr.length ; i++){
    for(let j = 0 ; j<arr[i].length ; j++){
        arr[i][j] = Number(prompt(`Enter element at arr[${i}][${j}] `));
    }
}

for(let i = 0 ; i<arr.length ; i++){
    console.log(arr[i]
    );
    
}

//Explain : - This is Bassically holdes a 2D arrays  with the diff Size of Array


//OUT PUT 

// Enter inner array  size 3
// Enter inner array  size 2
// Enter inner array  size 4
// Enter element at arr[0][0] 1
// Enter element at arr[0][1] 2
// Enter element at arr[0][2] 3
// Enter element at arr[1][0] 4
// Enter element at arr[1][1] 5
// Enter element at arr[2][0] 6
// Enter element at arr[2][1] 7
// Enter element at arr[2][2] 8
// Enter element at arr[2][3] 9
// [ 1, 2, 3 ]
// [ 4, 5 ]
// [ 6, 7, 8, 9 ]
