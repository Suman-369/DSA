
let prompt = require('prompt-sync')();

let arr = [10, 5, 15, 8, 3, 46, 19];

let search = Number(prompt("Enter the number to search: "));

let low= 0 , high = arr.length - 1;

let mid = Math.floor((low + high) / 2);

for(let i = 0 ; i < arr.length; i++){
    if(arr[mid] == search){
        console.log("Element found at index: " + mid);
    }else if(arr[mid] < search){
        low = mid + 1;

    }else{
        high = mid - 1;
    }
}

if(arr.indexOf(search) === -1) {
    console.log("Element not found in the array.");
} else {
    console.log("Element found at index:", arr.indexOf(search));
}
