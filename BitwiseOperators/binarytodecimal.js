// AND  \\  // & --> if 1 , 1 = 1


// example 5 & 7 = 5   ===>>  101
//                           111
//                         --------
//                            101  ===>> 5


// rightShift Operator
console.log(25>>2);

// out put = > 6 


//LeftShift Operator 
console.log(25<<2);

// Out put = > 100


let count = 0 , num =64

while(num !=0){
    if((num & 1) == 1){
    break
}else{
    count = count+1
    num = num >> 1
} 
}

console.log(count);