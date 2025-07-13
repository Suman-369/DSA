// find word with the start latter 

let word = ["attention" , "People" , "attire" , "hello" , "attend"]

let s = "at"
let count = 0 
for(let i = 0 ; i<word.length ;i++){
    if(word[i].startsWith(s)) count++
}

console.log(count);


// OUT PUT  3
