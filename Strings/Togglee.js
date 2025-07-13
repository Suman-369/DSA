let prompt = require("prompt-sync")()
let s = prompt("Enter a string: ")


let ans = ""
for(let i = 0 ; i < s.length ; i++){
    let asci = s.charCodeAt(i)
    if(asci>=65 && asci <=90){
        ans += String.fromCharCode(asci+32)
    }
    if(asci>=97 && asci <=122){
        ans += String.fromCharCode(asci-32)
    }
}

console.log(ans);
