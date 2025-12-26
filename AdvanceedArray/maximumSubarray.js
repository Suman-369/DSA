// kadans Algo

function maxSubArray( nums){
    let sum = nums[0]; // initialize sum with first index with value 0 
    let maxSum = nums[0]; // initialize maxSum with first index with value 0 

    for(let i =0 ; i<nums.length; i++){ // loop upto 1 to length
       if(sum<0){  // if sum  - ve then make the sum 0 
        sum = nums[i] // -ve then stay as it is 
       } 
       else{
        sum += nums[i] // sum main add kardo current index ka value 
       }
       if(sum>maxSum){  // sum ka value maXsum ka value se bada hai kya nahi check 
         maxSum = sum // agar bada hai to sum ka value max sum main  rakhdo
       }
    
    }
   return maxSum // return kardo  maxSum ko
}

let nums = [-2,1,-3,4,-1,2,1,-5,4]; // array set example 

console.log(maxSubArray(nums)); // print ans


// OUT PUT = 6
