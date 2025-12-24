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


function sumofdigit(num){
    if(num<10){
        return num ;

    }
    return (num%10) + sumofdigit(Math.floor(num/10))
}

let num = 731898

console.log(sumofdigit(num))

