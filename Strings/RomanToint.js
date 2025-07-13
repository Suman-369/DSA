// Leet Code question no 13 Roman No to Int no 


let prompt = require("prompt-sync")()

let s = prompt("Enter A Roman No : ").toUpperCase().trim();


let roman = {
    'I' :1,
    'V' : 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

let result = 0

for(let i = 0 ; i<s.length;i++){
    let currentval = roman[s[i]]
    let nextval = roman[s[i+1]]

    if(nextval>currentval){
        result += nextval - currentval
        i++
    }
    else{
        result += currentval
    }

}

console.log(result);

// OUT PUT => 
// Enter A Roman No : III 
// 3
