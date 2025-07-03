let arr = [ 10, 5, 15, 8, 3, 46, 19];
let prompt = require('prompt-sync')();

let search = Number(prompt("Enter the number to search: "));

for(let i = 0 ; i<arr.length;i++){
    if(arr[i]===search){
        break; 
    }
}

if(arr.indexOf(search) === -1) {
    console.log("Element not found in the array.");
} else{
    console.log("Element found at index:", arr.indexOf(search));
}
