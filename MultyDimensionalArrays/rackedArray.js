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

