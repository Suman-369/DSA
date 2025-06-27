let n = Number(prompt("Enter A Number : "));
 let main = n;
let sum = 0;

while(n>0){
    let digit = n%10

    let fact = 1;
    for(let i = 1 ; i<=digit;i++){
        fact *=i
    }

    sum += fact;
    n= Math.floor(n/10)
}

if(sum === main){
    console.log("Strong Number");
}else{
    console.log("Not A Strong Number");
    
}