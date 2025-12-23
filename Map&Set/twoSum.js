let target = 9 
let nums = [2,7,11,15]


function twoSum(nums,target){
    let map = new Map()
    let arr = []

    for (let i = 0 ; i<nums.length ; i++){
        if (map.has(target - nums[i])){
            arr.push(map.get(target - nums[i]))
            arr.push(i)
            return arr
        }else{
            map.set(nums[i],i)

        }
    }

    return arr

}
console.log(twoSum(nums,target))