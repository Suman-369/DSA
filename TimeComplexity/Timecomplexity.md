
## 📘 **Algorithm Complexity Notes**

---

### 🔹 1. **What is Complexity?**

* **Complexity** is used to describe the **efficiency** of an algorithm.
* Two main types:

  * **Time Complexity** – How fast?
  * **Space Complexity** – How much memory?

---

### 🔹 2. **Time Complexity**

Time complexity defines the **number of operations** in terms of the **input size `n`**.

### 🔹 3. **Handling for Large Inputs**

* Avoid `O(n²)`, `O(2ⁿ)`, `O(n!)` for large `n > 10^4`
* Use:

  * Hashing for quick lookup (O(1))
  * Sorting + Binary Search (O(n log n))
  * Efficient data structures (Heaps, Trees)

---

### 🔹 4. **Complexity Representation**

* **Big O (O)**: Worst-case (Most used)
* **Omega (Ω)**: Best-case
* **Theta (Θ)**: Average-case

📌 **Example: Linear Search**

```js
function linearSearch(arr, x) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === x) return i;
  }
  return -1;
}
```

* **Best-case (Ω)**: O(1) – Found at index 0
* **Worst-case (O)**: O(n) – Found at last or not found
* **Average-case (Θ)**: O(n/2) → O(n)


### 🔹 6. **Generating Complexity Equations**

🔍 **Example**:

```js
for(let i = 0; i < n; i++)        // O(n)
  for(let j = 0; j < n; j++)      // O(n)
    console.log(i, j);            // O(1)
```

* Total = `n * n * 1 = O(n²)`

💡 **Tip**: Count the total number of primitive operations inside loops.

---

### 🔹 7. **TLE (Time Limit Exceeded)**

* Happens when your code exceeds the allowed time limit (often \~1s or \~2s).
* **Avoid TLE by**:

  * Reducing nested loops
  * Using fast algorithms (e.g. HashMap over brute-force)
  * Avoiding redundant computation (e.g. memoization)

---

### 🔹 8. **Space Complexity**

* Measures **extra memory** used by the algorithm (not input).
* Includes: function call stack, variables, arrays, etc.

#### 📌 Example:

```js
function sum(arr) {
  let total = 0;       // O(1)
  for(let i = 0; i < arr.length; i++) {
    total += arr[i];   // O(1)
  }
  return total;
}
```

* **Space Complexity**: O(1) → Using only 1 variable `total`.

---

### 🔹 9. **Practice Questions with Time and Space Analysis**

---

#### ✅ Q1. Sum of Array Elements

```js
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
```

* **Time**: O(n)
* **Space**: O(1)

---

#### ✅ Q2. Find Max Element

```js
function maxElement(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
```

* **Time**: O(n)
* **Space**: O(1)

---

#### ✅ Q3. Brute Force Pair Sum

```js
function hasPairSum(arr, k) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
      if(arr[i] + arr[j] === k) return true;
    }
  }
  return false;
}
```

* **Time**: O(n²)
* **Space**: O(1)

---

#### ✅ Q4. Optimized Pair Sum using Set

```js
function hasPairSum(arr, k) {
  let set = new Set();
  for (let val of arr) {
    if (set.has(k - val)) return true;
    set.add(val);
  }
  return false;
}
```

* **Time**: O(n)
* **Space**: O(n)

---

Displaying Day 42.md.
