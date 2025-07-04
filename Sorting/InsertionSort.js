let arr = [5, 3, 8, 4, 2, 6];

for (let i = 0; i < arr.length ; i++) {
    let key = arr[i];

    let j = i-1;

    while(j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j --;
    }
    arr[j + 1] = key;
}
console.log(arr);


//OUT PUT 
