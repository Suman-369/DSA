let arr = [10, 5, 15, 8, 3, 46, 19];

let last =  arr[0]
for(let i = 0;i<arr.length-1 ; i++){
    arr[i] = arr[i+1]
}

arr[arr.length-1] = last

console.log(arr);
