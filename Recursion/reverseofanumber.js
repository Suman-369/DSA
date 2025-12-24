// NOrmal Way to solve reverse of a digit 

let n = 369;

let rev = 0;

while (n > 0) {
  let rem = n % 10;
  rev = rev * 10 + rem;
  n = Math.floor(n / 10);
}

console.log("Reversed Number is : ", rev);



// with recursion way

function reverseofanumber(num , rev){
    if( num === 0 ) return rev 

    return reverseofanumber(Math.floor(num/10) , rev*10 + num%10)
}

let num = 369;

console.log(reverseofanumber(num , 0))
