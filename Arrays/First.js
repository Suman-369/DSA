let prompt = require("prompt-sync")()

let size = Number(prompt("Enter Size of an Array: "))

let arr = new Array(size)

let sum = 0

for(let i =0 ;i<arr.length;i++){
    arr[i] = Number(prompt(`Enter ElementcAt idx ${i+0}: `))
    sum += arr[i]
}

console.log("Array is: " + sum);


// output  idx sum means idx 0 + idx 1 + idx 2 = result 
// example 10 +20 +30 = 60
