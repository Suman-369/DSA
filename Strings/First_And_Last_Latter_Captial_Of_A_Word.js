//first and last latter of every word should be capital 


let s = "hello suman kya haal chaal"


let ans = ""

let arrStr = s.split(" ")
for(let i = 0 ; i<arrStr.length;i++){
    let word = arrStr[i]
    if(word.length<=2) ans +=word.toUpperCase() + " "
        else{
           ans += word.charAt(0).toUpperCase() + word.substring(1,word.length-1) + word.charAt(word.length-1).toUpperCase() +" "
    }
}

console.log(ans);
