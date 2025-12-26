
// leet code 169

// ek array diya hai jisko n / 2 karna padega and the number of length suppose ek array ahai 7 length ka usko n/2 kanese 3 ands milega and check akrna hai us array main koi esa value hai kya jo 3 bar ya 3 bar se jyda appare ho raha hai agar ho raha hai to ohi value mera majority element hoga .

// solve technique : 


// plehela to brute forse approach laga sakte ho jo ki ek set map create kar sakte ho and ak array amain kitni bar ek value appare hpo raha hai uska key value se pata laga sakte ho and jo number jyda bar appre ho raha hai usko he majority lement bol sakte ho .

// second approach ya hai ki 
// ek count name ka variable banate hai jiska initially value rahega 1 
// dusra mera ans ka value hoga first index of an array 
// matlam simple hai jo value mera aarray ka first index par hoga ohi value mera ans hoga by default 

// then ek loop chalana hai index 1 se lekar length tak 
// check mera count ka value 0 ke bara bar to nahi agar hai to us time ans main us array ka index ke value ko set kardo and count ka value 1 kardo 
// agar nahi hai to check karo mera ans or pointed index ka value samehai kya agar nahi hai uss time kardo count ka value count --
// or agar same hai to count ko badhado count ++ 

// last par retrun kardo mera ans ka value 

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
