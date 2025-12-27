// LeetCode Question no 11


// question :=>  Ek Container hai usme bohot sara gight ka index hai tumko find karna hoga ki max kitna water contain kar sakte hai

// ans :=> ham pehele ek ans value initialize kar 

function MostWaterContainer(arr){
    let ans = 0 ; i = 0 , j = arr.length-1

    while(i<j){
        ans = Math.max(ans , Math.min(arr[i],arr[j]) *(j-i))

        if(arr[i]< arr[j]) i++
        else j--
    }
    return ans
}


let arr = [1,8,6,2,5,4,8,3,7]; // initialize a array
console.log(MostWaterContainer(arr)); // output the result of the function .
