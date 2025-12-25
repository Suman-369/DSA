let arr1 = [2,4,5]

let arr2 = [1,3,7]

let ans = new Array(arr1.length + arr2.length)

let i =0 
let j =0
let k =0

while(i<arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]){
        ans[k++] = arr1[i++]
    }
    else{
        ans[k++] = arr2[j++]
    }

}

while(i < arr1.length){
    ans[k++] = arr1[i++]
}
while(j < arr2.length){
    ans[k++] = arr2[j++]
}

console.log(ans);
