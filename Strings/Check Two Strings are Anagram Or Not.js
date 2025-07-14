// Anagram Or Not

let prompt = require("prompt-sync")()

let s1 = prompt ("Enter String One :")
let s2 = prompt ("Enter String Two :")

let freqArr = new Array(123).fill(0)
if(s1.length!= s2.length){
    console.log("Not Anagram");
    
}
else{
    let isAnagram = true
for(let i = 0 ; i<s1.length;i++){
    let asci = s1.charCodeAt(i)
    freqArr[asci] = freqArr[asci]+1
}
for(let i = 0 ; i<s2.length;i++){
    let asci = s2.charCodeAt(i)
    freqArr[asci] = freqArr[asci]-1
}
for(let i = 0 ;i<freqArr.length;i++){
    if(freqArr[i]!=0){
        isAnagram = false
        break
    }
}
 if(isAnagram) console.log("Given String are Anagram");
 else console.log("Given String are Not Anagram");
 
}

//OUT PUT 
//Enter String One :taste
// Enter String Two :state
// Given String are Anagram
