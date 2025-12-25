// sort the two sorted array into a combine array 

let arr1 = [2,4,5] // initialize array 1 

let arr2 = [1,3,7] // initialize array 2

let ans = new Array(arr1.length + arr2.length) // create a big ans array combine the two sorted array length

let i =0  // initialize i with value 0 
let j =0  // initialize j with value 0 
let k =0  // initialize k with value 0 

while(i<arr1.length && j < arr2.length){  // check the value of i is smaller then array 1 and array 2 length or not ?
    if(arr1[i] < arr2[j]){ // check array 1 index value is small to the array 2 index value or not 
        ans[k++] = arr1[i++] // if small ans array par assaign kardo i ka value and i ++ kardo or k ++ kardo 
    }
    else{
        ans[k++] = arr2[j++] // same goes to the array2 
    }

}

while(i < arr1.length){ // array 1 ka length is exsoted or not matlab length par kar ke chala gya ya nahi
    ans[k++] = arr1[i++] // agar chala gya then all the i value should be initialize into the ans array accordingly 
}
while(j < arr2.length){ // array 2 ka length is exsoted or not matlab length par kar ke chala gya ya nahi
    ans[k++] = arr2[j++] // agar chala gya then all the j value should be initialize into the ans array accordingly 
}


console.log(ans); // print the ans array 
