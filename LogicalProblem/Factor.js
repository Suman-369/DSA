let n = Number(prompt("Enter A Number"))

if(n<0){
    console.log("Plese Enter A valid Number ");
}
let output = []

for(let i = 1 ; i<=n ;i++){
    if(n%i === 0){
        output.push(i)
    // you can write this also output += i + " " 
    }

    
}


    console.log(output.join(" "));
// write also cnsole.log(output.trim())


//  THE OUTPUT IS => If the input is 6 then output 1 2 3 6 
