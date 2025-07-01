let arr = [28,6,74,48,84,79]

let max = Math.max(arr[0],arr[1])

let sMax = Math.min(arr[0],arr[1])

for(let i = 2 ;i<arr.length;i++){
    if(arr[i]>max){
        sMax = max
        max = arr[i]}
     else if(arr[i]>sMax && arr[i]!= max){
        sMax = arr[i]
        }
}

console.log("Second Max Element => " + sMax);


//Let’s walk through the values step by step:
// Initial:

// max = 28

// sMax = 6

// Loop starts at i = 2 → arr[i] = 74

// 74 > max (28) → sMax = 28, max = 74

// Now:

// max = 74

// sMax = 28

// i = 3 → arr[i] = 48

// 48 < max (74)

// 48 > sMax (28) → update sMax = 48

// Now:

// max = 74

// sMax = 48

// i = 4 → arr[i] = 84

// 84 > max (74) → sMax = 74, max = 84

// Now:

// max = 84

// sMax = 74

// i = 5 → arr[i] = 79

// 79 < max (84)

// 79 > sMax (74) → sMax = 79

// Final:

// max = 84

// sMax = 79


//So the output is => 79

