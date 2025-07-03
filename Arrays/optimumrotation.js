let prompt = require("prompt-sync")();

let arr = [1, 2, 3, 4, 5];
let k = Number(prompt("Enter the number of right rotations: "));

k = k % arr.length;  // To handle cases where k > array length

// Step 1: Reverse the whole array
reverse(arr, 0, k-1 );

// Step 2: Reverse the first k elements
reverse(arr, k,  arr.length - 1);

// Step 3: Reverse the remaining elements
reverse(arr, 0, arr.length - 1);

// Final result
console.log("Right rotated array:", arr);

// Reversal helper function
function reverse(arr, i, j) {
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
}

// output should be if you enter k = 2 then output [3, 4, 5, 1, 2]
