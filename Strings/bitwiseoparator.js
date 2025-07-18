
//right shift operator
// here firstof all wi divide the 25 into its binary number and then right shift with 2 

console.log(25>>2); // out put 6 

//Left shift operator 
// here first we divide the 25 into his binary number and then left shift by 2 and then the right shide make 2 empty box so we put two zero over there and now calculate the number we get te value 

console.log(25<<2); // out put 100


// even or Odd check help of bitwise operator 
let prompt = require("prompt-sync")()

let num = prompt("Enter a number: ")

console.log((num&1)== 0 ? "even" : "odd");


//Out put >> if 8 then even
