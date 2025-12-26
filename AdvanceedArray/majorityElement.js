// leet code 169

function majorityElem(nums){

    let count = 1 ;
    let ans = nums[0]

    for(let i = 1 ; i<nums.length; i++){
        if(count ==0){
            ans = nums[i]
            count = 1
        }
        else if( ans != nums[i]){
            count -- ;

        }
        else {
            count ++
        }
    }
return ans

}



let nums = [3,2,3];
console.log(majorityElem(nums));
