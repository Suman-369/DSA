// NOrmal Way to solve reverse of a digit 

let n = 369; // initialize the number 

let rev = 0; // set the reverse value initially 0 

while (n > 0) {  // check if the number getter then 0 or not 
  let rem = n % 10;  // yes -> reminder nikalo means find the last digit  => 9 
  rev = rev * 10 + rem;  //  (0*10) + 9  => 9  calculated value set on the rev , now the value of rev is 9 
  n = Math.floor(n / 10);  // ek number ko kam karke fhir bhejo , means cut the one number from the digit now go => 36
}

console.log("Reversed Number is : ", rev); // print the last  rev value 



// with recursion way

function reverseofanumber(num , rev){ // a function which is accept a number and the reverse value 
    if( num === 0 ) return rev // check the given number is 0 or not if 0 then retun rev  

    return reverseofanumber(Math.floor(num/10) , rev*10 + num%10) // other wise  retrun the cut of one number and sath he sath calculated rev value (0*10) + (369%10)  => 9
}

let num = 369; // initialize the number 

console.log(reverseofanumber(num , 0)) // print the function 
