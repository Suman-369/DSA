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

let c = 16;
let d = 24;

while (c != d) {
  if (c > d) c = c - d;
  else d = d - c;
}

console.log(c);
