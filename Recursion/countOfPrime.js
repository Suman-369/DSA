   let prompt = require("prompt-sync")();
    let n =Number(prompt("Enter the number : "));
 

    // kaha tak chalana hai ek loop ko its 2 ----- >> square root of (n)

    // let arr = new Array(n+1).fill(true)

    // arr[0] = false; // 0 is not prime

    // arr[1] = false; // 1 is not prime

    // for( let i = 2 ; i*i <= n ; i++ ){ // run a loop from 2 to square root of n

    //     if( arr[i] === true ){ // check if the value is true or not
    //         for( let j = i*i ; j <= n ; j += i ){ // if true then run another loop from i*i to n with increment of i
    //             arr[j] = false // mark all multiples of i as false
    //             console.log(arr)
    //         }
    //     }
    // }
    
    // // console.log(arr) 
    // let count = 0;
    // for( let i = 0 ; i <= n ; i++ ){ // run a loop from 0 to n
    //     if( arr[i] === true ){ // check if the value is true or not
    //         count++ // if true then increment the count
    //         console.log(i)
    //     }
    // }
    // console.log(count)
    // console.log("Total Prime Numbers are : " , count)




    function checkPrime(n){
        let isPrime = new Array(n+1).fill(true)

        for(let i =2 ; i<=Math.sqrt(n) ; i++){
            if(isPrime[i] == true){
                for( let j = i*i ; j <= n ; j += i ){ // if true then run another loop from i*i to n with increment of i
                    isPrime[j] = false // mark all multiples of i as false
                }
            }
        }

        for(let i = 2 ; i<isPrime.length ; i++){
            if(isPrime[i]) process.stdout.write(i +" ")
                
    }
}

checkPrime(n)