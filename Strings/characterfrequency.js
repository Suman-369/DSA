//Bit map


let prompt = require('prompt-sync')()

let s = prompt("Enter a String : ")

let freqArr = new Array(123).fill(0)

for(let i = 0 ; i<s.length;i++){
    let asci = s.charCodeAt(i)
    freqArr[asci] = freqArr[asci] +1 
}
for(let i = 0 ; i<freqArr.length;i++){
    if(freqArr[i]>0){
        console.log(String.fromCharCode(i) + " -> "+freqArr[i]);
        
    }
}

//OUT PUT 

// Enter a String : suman
// a -> 1
// m -> 1
// n -> 1
// s -> 1
// u -> 1


