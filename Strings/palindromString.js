// Check A String is  Pallindrom Or Not !!


let prompt = require("prompt-sync")()

let s =  prompt("enter a string : ")

let isPallindrom = true 

let i = 0 , j = s.length-1

while(i<j){
    if(s[i] != s[j]){
        isPallindrom = false
        break
    }
    i++
    j--
}

if(isPallindrom) console.log("Its A Pallindrom ");

else console.log("Its Not A Pallindrom ");

// OUT PUT 
// enter a string : suman
// Its Not A Pallindrom 
