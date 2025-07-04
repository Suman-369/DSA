
let arr= [5, 3, 8, 4, 2, 6];

for(let i = 0 ; i<arr.length;i++){
    let small = i;
    for(let  j= i+1 ; j<arr.length;j++){
        if(arr[small]> arr[j]){
            small = j
        }
    }
    if(small != i){
        let temp = arr[i];
        arr[i] = arr[small];
        arr[small] = temp;
    }
}

console.log(arr);

//OUT PUT 

//[ 2, 3, 4, 5, 6, 8 ]
