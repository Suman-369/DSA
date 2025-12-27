
// LeetCode Question No 45 

function trappingrainwater(arr){

    let n = arr.length
    let left = new Array(n)
    let right = new Array(n)

    left[0] = arr[0];
    for(let i = 1 ; i<arr.length;i++){
        left[i] = Math.max(left[i-1], arr[i])

    }
    right[n-1] = arr[n-1];
    for(let i = n-2 ; i>=0;i--){
        right[i] = Math.max(right[i+1], arr[i])
    }
    let water = 0;
    for(let i =0 ; i<arr.length;i++){
        water += Math.min(left[i], right[i]) - arr[i]
    }
    return water;
}


let arr = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trappingrainwater(arr));
