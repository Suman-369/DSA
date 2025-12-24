// Highest Common Factor (HCF) or Greatest Common Divisor (GCD) of two numbers using iteration


let a = 32

let b = 20

for ( let i = Math.min(a,b);  i>=1 ; i-- ){
    if( a % i === 0 && b % i === 0 ){
        console.log(i)
        break
       
        
    }
}

