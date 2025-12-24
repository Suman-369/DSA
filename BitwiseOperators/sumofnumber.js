let n = 369;

let sum = 0;

while (n > 0) {
  let rem = n % 10;
  sum += rem;
  n = Math.floor(n / 10);
}

console.log("Sum of Number is : ", sum);



// with recursion '


function sumofdigit(num){
    if(num<10){
        return num ;

    }
    return (num%10) + sumofdigit(Math.floor(num/10))
}

let num = 731898

console.log(sumofdigit(num))

