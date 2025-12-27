// LeetCode Question no 11


// question :=>  Ek Container hai usme bohot sara gight ka index hai tumko find karna hoga ki max kitna water contain kar sakte hai

// ans :=> ham pehele ek ans = 0 value initialize kar lenge then do pinter i and j ko initialize kar lenge joki i start hoga index 0 se and j start hoga length-1 index matlab last se 
// then ek loop chalega jisme  base casw hai i and j saman hai kya agar nahi hai then ans ka value ko update kar do
// max value nikalo current ans or the i and j pointed value maise min * j-1 index main se max konsa hai

// then check agar kiska height chota hai usko kardo ++
// then return kardo ans ko

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
