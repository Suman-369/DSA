// leetcode 121 question Max profit 


// QUestion ka motive a hai ki tumko sabse chota stock bue karna padega in an array and feuture main max profit k sath bechna padega  ** past main nahi bechna always future main bechna hai 

// solution : => array ka first index ko  min dharlo and max profit ko 0 rakkho 
// then ek loop lo jo ki 0 se mera array ka length tak jayega 
// then ceec karo min ka value bada hai kay  current index ka value se agar hai to min ka value change karke index ka value kardo 
// then prfit calculate karo jo ki index - min hai 
// then check  karo max profit or current profit konsa bada hai 
// bas last main maxProfit ko return kardo 

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
