let  arr= [1,2,10,4,2,2,2,3,10,5]

let map = new Map()

for(let i = 0 ; i<arr.length;i++){
    if(map.has(arr[i])){
        map.set(arr[i],map.get(arr[i])+1)
    }else{
        map.set(arr[i],1)
    }
}

console.log(map);

// OUT PUT 

// Map(6) { 1 => 1, 2 => 4, 10 => 2, 4 => 1, 3 => 1, 5 => 1 }
