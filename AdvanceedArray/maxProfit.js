function maxProfit(nums){
    let min = nums[0]; // sabse pehla value ko min main store karlo
    let maxProfit = 0 // maxProfit ko 0 se initialize karlo

    for(let i =1 ; i<nums.length;i++){
        if(nums[i]<min) { // agar current index ka value min se chota hai to min main current index ka value store karlo
            min = nums[i];
        
        }
        let profit = nums[i] - min // profit nikalne ke liye current index ka value main se min ko minus kar do

        maxProfit = Math.max(maxProfit , profit) // maxProfit main maximum value store karlo jo ki maxProfit or profit main se bada hoga

    }

    return maxProfit // return kardo maxProfit ko
}


let nums = [7,1,5,3,6,4];
console.log(maxProfit(nums));