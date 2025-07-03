// let arr = [10, 5, 15, 8, 3, 46, 19];

// let left = 0 ,right = arr.length-1
// while(left<right){
//     let temp = arr[left]
//     arr[left] = arr[right]
//     arr[right] = temp
//     left++
//     right--
// }

// console.log(arr);


// it will bw a any other approach 

let arr = [10, 5, 15, 8, 3, 46, 19];

let temp = new Array(arr.length);

let i= 0 

for(let j = arr.length -1 ; j>=0 ; j--){
    temp[i] = arr[j]
    i++
}

console.log(temp);
