let n = Number(prompt("Enter A Number : "));

let squre = n*n;
 let nString = n.toString();
 let squreString = squre.toString();

 if(squreString.endsWith(nString)){
     console.log("Automorphic Number")
    }else{
        console.log("Not An Automorphic Number")
    }