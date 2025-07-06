# 📊 Some Types of Time Complexity

---

## 🔹 O(1) – Constant Time Complexity

Basically, it's called **Constant Time Complexity**.

- **Meaning**: When `n` (input size) is a predefined constant value like `n = 2`, `n = 10`, `n = 100`, or `n = 10000`.
- **Time doesn't change** with the input size.
- ✅ **Example**: Accessing an array element by index.

---

## 🔹 O(n) – Linear Time Complexity

Basically, it's called **Linear Time Complexity**.

- **Meaning**: When `n` depends on **user input** and operations are performed based on that input.
- Time increases **linearly** with input size.
- ✅ **Example**: Loop that runs from `1 to n`.

---

## 🔹 O(n²) – Quadratic Time Complexity

Basically, it's called **Quadratic Time Complexity**.

- **Meaning**: When the program has a **nested loop**, each running up to `n`.
- Time grows **exponentially** with input size.
- ✅ **Example**:

```javascript
for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
        // Bubble sort logic or similar nested loop operations
    }
}
🔹 O(log n) – Logarithmic Time Complexity
Basically, it's called Logarithmic Time Complexity.

Meaning: When the input size is reduced drastically (halved) in each operation.

Efficient for large inputs.

✅ Example: Binary Search algorithm.

🔹 O(2ⁿ) – Exponential Time Complexity
Basically, it's called Exponential Time Complexity.

Meaning: When the number of operations doubles for every increment in n.

Very inefficient for large n.

✅ Example: Recursive calculation of Fibonacci numbers.

ini
Copy
Edit
n = 3 → 2^3 = 8 operations
🔹 O(n!) – Factorial Time Complexity
Basically, it's called Factorial Time Complexity.

Meaning: Operations grow in factorial scale with input size.

Very expensive and slow for large inputs.

✅ Example: Solving Traveling Salesman Problem (TSP) with brute force.

ini
Copy
Edit
n = 6 → 6! = 6 × 5 × 4 × 3 × 2 × 1 = 720 operations
🔹 O(n log n) – Linearithmic Time Complexity
Basically, it's called Linearithmic Time Complexity.

Meaning: When there's a combination of linear and logarithmic operations.

Common in efficient sorting algorithms.

✅ Example: Merge Sort, Heap Sort, Quick Sort (average case).

