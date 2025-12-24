// Highest Common Factor (HCF) or Greatest Common Divisor (GCD) of two numbers using iteration


let a = 32 // initialize a number in a  

let b = 20 // initialize a number in b

for ( let i = Math.min(a,b) ; i>=1 ; i-- ){ // ek loop chalega jo ki a b ka min se 1 ki taraf jata hai 
    if( a % i === 0 && b % i === 0 ){ // at the moment the number is completly divisable by the a and the b 
        console.log(i) // then print the value of i 
        break // stop the loop 
    }
}
