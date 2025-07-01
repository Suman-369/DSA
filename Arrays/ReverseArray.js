let arr = [10, 5, 15, 8, 3, 46, 19];

let left = 0 ,right = arr.length-1
while(left<right){
    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
    left++
    right--
}

console.log(arr);


//output = [19 , 46 , 3 , 8 , 15 , 5 ,10]
