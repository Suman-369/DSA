
// LeetCode Question No 45 

function trappingrainwater(arr){ // a function that calculates the amount of water that can be trapped after raining
 
    let n = arr.length // length of the array
    let left = new Array(n) // create an array to store the maximum height to the left of each index

    let right = new Array(n) // create an array to store the maximum height to the right of each index

    left[0] = arr[0]; // first index of left array is same as the first index of the input array
    for(let i = 1 ; i<arr.length;i++){ // loop through the array from index 1 to the end
        left[i] = Math.max(left[i-1], arr[i]) // for each index, store the maximum height to the left

    }
    right[n-1] = arr[n-1]; // last index of right array is same as the last index of the input array
    for(let i = n-2 ; i>=0;i--){ // loop through the array from second last index to the start
        right[i] = Math.max(right[i+1], arr[i]) // for each index, store the maximum height to the right
    }
    let water = 0; // initialize water variable to store the total amount of water trapped
    for(let i =0 ; i<arr.length;i++){ // loop through the array
        water += Math.min(left[i], right[i]) - arr[i] // for each index, calculate the water trapped and add it to the total water
    }
    return water; // return the total amount of water trapped
}


let arr = [0,1,0,2,1,0,1,3,2,1,2,1]; // initialize a array 
console.log(trappingrainwater(arr)); // output the result of the function .



// Out PUt = 6
