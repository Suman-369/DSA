

// 2-D Array With User Input

let prompt = require("prompt-sync")()

let Size = Number(prompt("Enter the size of array: "))
let arr = new Array(Size)
let innerArrSize = Number(prompt("Enter the size of inner array: "))
for(let i = 0; i<arr.length;i++){
    arr[i] = new Array(innerArrSize)
}

for(let i = 0; i<arr.length;i++){
    for(let j = 0; j<arr[i].length;j++){
        arr[i][j] = Number(prompt(`Enter the element at position [${i}][${j}]: `))
    }
}

console.log(arr);

