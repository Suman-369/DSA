
# 📊 Some Types of Time Complexity


## 🔹 O(1) – Constant Time Complexity

  Basically its called Constant Time Complexity  ..   => matlab jab bhi n ki value koi constant value diya gya ho i means when n = 2 , n = 10 . n= 100, n= 10000 like this .. jab n ki value pehele se he difine kiya ho koi bhi programme mein  This type of programme time complexity is O(1)  .



## 🔹 O(n) – Linear Time Complexity

  Basically its called Linear time Complexity

  when n ki value user input k upar depand karta hai and the operation us input k upar depand karke perform karta hai then this tupe of time complexity is called o(n)

## 🔹 O(n²) – Quadratic Time Complexity


  Basically Its Called Quadratic Time Complexity

  When koi v performance or programme main nestade loop use ho raha ho then this type of time time complexity is called o(n^2).

  exmaple :- ```javascript
for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
        // Bubble sort logic or similar nested loop operations
    }
}

 
## 🔹 O(log n) – Logarithmic Time Complexity

Basically its  Called Logarithmic Time Complexity

Means  Agar koi input size ka value  bht bada ho and ek operation main he uska value bht kam ho gya ho then this type of programmes time complexity is called o(log n) time complexity ..

Example like imagine you have a binary search algorithm in which you have to find a number in a sorted array of numbers . The time complexity of this algorithm is O(log n) because with each step, you are effectively halving the search space.  



## 🔹 O(2ⁿ) – Exponential Time Complexity

Basically its Called Exponential Time Complexity

when n ki value ke upar based karke bht jyda operation lage then this type of time complexity is called o(2^n) time complexity ..

like n = 3 then 2 ^n = 2^3 = 8 

## 🔹 O(n!) – Factorial Time Complexity

Basically its Called Factorial Time Complexity

when n ki value ke upar based karke bht jyda operation lage then this type of time complexity is called o(n!) time complexity ..

example n = 6 
then  n! = 6 * 5 * 4 * 3 * 2 * 1 = 720 operation 


## 🔹 O(n log n) – Linearithmic Time Complexity

agar koi programme like example koi nestade loop use kar raha ho and uske first loop n tim complexity use kar raha ho and under wala loop log n time complexity use kar raha ho then this type of time complexity is called o(nlogn) time complexity ..


 ## example :- 

 1 . n >= 10^9  =   O(1) , o(log n )

 2 . n <=10^8  =  O(log n) , o(n)


  ## Efecient way 

  1<= n <= 10^4 {
    O(1) , o(log n)
    o(n log n) , o(n) , o(n²)
  }

 1<= n <= 10^5 , 10^6 {
  O(1) , o(n)
 }

  1<= n <= 10^8 , 10^9 {
    O(1) , o(log n)
  }



  ## space Complexity

  let = > o(1)