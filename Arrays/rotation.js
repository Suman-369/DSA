let arr = [1,2,3,4,5]

console.log(arr);

let k = 5

k = k%arr.length

for(let j = 1 ; j<=k ; j++){
    let copy = arr[0]
    for(let i = 0; i<arr.length-1; i++){
        arr[i] = arr[i+1]
    }
    arr[arr.length-1] = copy
}

console.log(arr);
// its maybe how many rotation need to do this perform 
