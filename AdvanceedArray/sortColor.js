// leet code 75 question sort colors


function swap(arr , i ,j){
    let trisha = arr[i]
    arr[i] = arr[j]
    arr[j] = trisha
}


function sortColors(arr){
    let i = 0 , j= 0 , k = arr.length-1;

    while(i<=k){
        if(arr[i] === 0 ){
            swap(arr , i++ , j++)
        }
        else if(arr[i] === 2){
            swap(arr , i , k--)
        }
        else{
            i++
        }
    }
}

let arr = [2,0,2,1,1,0];

sortColors(arr);

console.log(arr);