// 2 -> 10  || MSB is carry 1 and other Bits is all 0 this binary operation is called the powr of 2 
// 4 -> 100    
// 8 -> 1000

// 16 -> 10000
// 32 -> 100000
// 64 -> 1000000


// 1 -> 1  || all the number which is the power of two and the prev number of that number always carry all the 1
// 3 -> 11
// 7 -> 111
// 15 -> 1111


// its a check if the given number is power of two or not 

let prompt = require("prompt-sync")()

let n = Number(prompt("Enter a Number : "))


console.log((n &(n-1)) ==  0 ? "Power of 2" : "Not Power Of 2");
