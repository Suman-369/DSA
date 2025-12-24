// Highest Common Factor (HCF) or Greatest Common Divisor (GCD) of two numbers using iteration

let a = 32; // initialize a number in a

let b = 20; // initialize a number in b

for (let i = Math.min(a, b); i >= 1; i--) {
  // iterate from min(a,b) to 1
  if (a % i === 0 && b % i === 0) {
    // check if i is a factor of both a and b
    console.log(i); // print the HCF/GCD
    break; // exit the loop once the HCF/GCD is found
  }
}

// recursive function to find HCF/GCD of two numbers
// with the Euclidian algorithm
// Euclidian formula humlogoko bolta hai ki substract karo bade value se chota value  and jo reminder ata hai usko store ka do bade wale value ke jagaha 

let c = 16; 
let d = 24;  
while (c != d) { // check c or d same or not 
  if (c > d) c = c - d; // if c is big the d or not 

  else d = d - c; // else then // 24 - 26 = 8  => and store the 8 at place of 24 
}

console.log(c);


// Another recursive function to find HCF/GCD using modulus operator

// to minimize the time complexity

function gcd(a, b) {
  if (a == b) return a; // base case: if both numbers are equal, return either one
  if (a > b) return gcd(a - b, b); // if a is greater, subtract b from a and recurse
  return gcd(a, b - a); // if b is greater, subtract a from b and recurse
}

console.log(gcd(a,b)); // Output: 4


// Optimized version using modulus operator

function gcdOptimized(a, b) { // 32, 20 
  if (b == 0) return a; // base case: if b is 0, return a // 20 ==0 false 
  return gcdOptimized(b, a % b); // recurse with b and the remainder of a divided by b // a = 20 , b = 32 % 20 = 12
}
// same thing repeat again and again until b == 0 
console.log(gcdOptimized(a,b)); // Output: 4