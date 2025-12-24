// Normal way to calculate sum of given number of all the digit .

let n = 369; // initialize number 

let sum = 0; // put the sum value initially 0

while (n > 0) { // check if the given number getter then 0 or not 
  let rem = n % 10; // calculate the last digit of the given number 
  sum += rem; // add the calculated reminder like 3 + 6 + 9
  n = Math.floor(n / 10);  // remove the last element that calculated yet 
}

console.log("Sum of Number is : ", sum); // print the total sum of the number 



// with recursion 'way 


function sumofdigit(num){  // a function that accept a argument number 
    if(num<10){  // check if the number is a single digit or not 
        return num ; // if single digit return that number 

    }
    return (num%10) + sumofdigit(Math.floor(num/10)) // add the last number that exist add it to the return value of if condithion 
}

 let num = 731898    //  initialize number

console.log(sumofdigit(num)) // print the function 





// IMPORTANT POINT 

// n % 10 === >>>  reminder if number is 369 means after n % 10 it gives 9 

// n/10  ===>>> reminder if number is 369 means after n / 10 it gives  36

