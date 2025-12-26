function maxSubArray( nums){
    let sum = nums[0];
    let maxSum = nums[0];

    for(let i =0 ; i<nums.length; i++){
       if(sum<0){
        sum = nums[i]
       } 
       else{
        sum += nums[i]
       }
       if(sum>maxSum){
         maxSum = sum
       }
    
    }
   return maxSum
}

let nums = [-2,1,-3,4,-1,2,1,-5,4];

console.log(maxSubArray(nums));