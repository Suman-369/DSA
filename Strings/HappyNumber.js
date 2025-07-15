//Leet Code question No 202

let prompt = require("prompt-sync")()

let n  = prompt("Enter A number : ")

let set = new Set()

while(true){
    let sum = 0 
    while(n>0){
        let rem = n%10
        sum += rem*rem
        n = Math.floor(n/10)
    }
    if(sum === 1) {
        console.log("Happy Number");
        break
    }
    if(set.has(sum)) {
        console.log("Not A Happy Number ");
        break
    }
    else set.add(sum)

    n = sum 
    
    
}
