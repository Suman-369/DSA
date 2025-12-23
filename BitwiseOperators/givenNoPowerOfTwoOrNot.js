// 2 -> 10
// 4 -> 100    
// 8 -> 1000

// 16 -> 10000
// 32 -> 100000
// 64 -> 1000000


// 1 -> 1
// 3 -> 11
// 7 -> 111
// 15 -> 1111


let prompt = require("prompt-sync")()

let n = Number(prompt("Enter a Number : "))


console.log((n &(n-1)) ==  0 ? "Power of 2" : "Not Power Of 2");
