// let prompt = require("prompt-sync")();

let arr = [10 , 5 , 15 , 8 , 3, 46 ,19]

let max = arr[0]
for(let i =1 ; i<arr.length;i++){
   if(arr[i]>max){
     max = arr[i]
   }
}

console.log("Max Element => " + max);

