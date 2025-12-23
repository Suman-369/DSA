let prompt = require('prompt-sync')();

let n = Number(prompt("Enter a Number : "))

console.log((n&1) == 0 ? "EVen" : "Odd");
