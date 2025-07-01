let arr = [10, 5, 15, 8, 3, 46, 19];

let first = arr[arr.length - 1];

for(let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
}

arr[0] = first;

console.log(arr);

//Out Put [19, 10,  5, 15, 8,  3, 46]
