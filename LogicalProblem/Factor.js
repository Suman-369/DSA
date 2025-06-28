let n = Number(prompt("Enter A Number"))

if(n<0){
    console.log("Plese Enter A valid Number ");
}
let output = []

for(let i = 1 ; i<=n ;i++){
    if(n%i === 0){
        output.push(i)
    }

    
}


    console.log(output.join(" "));