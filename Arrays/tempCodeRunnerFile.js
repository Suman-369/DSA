let arr = [10, 5, 15, 8, 3, 46, 19];

let temp = new Array(arr.length);

let i= 0 

for(let j = arr.length -1 ; j>=0 ; j--){
    temp[i] = arr[j]
    i++
}

console.log(temp);