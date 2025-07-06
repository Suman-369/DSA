
# Multi-Dimensional Arrays in JavaScript

## **What is a Multi-Dimensional Array?**
- A multi-dimensional array is an array that contains other arrays as its elements.
- The most common type is a **2D array**, which is essentially an array of arrays.
- Used to represent grids, matrices, and tabular data structures.

---

## **How to Create a 2D Array Statically**

- A **static 2D array** is defined with pre-filled values.

```js
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);
```
- Here, `matrix` is a **3x3 static 2D array**.

---

## **How to Create a 2D Array Dynamically**

- A **dynamic 2D array** is created using loops to initialize rows and columns.

```js
let rows = 3, cols = 3;
let matrix = new Array(rows);

for (let i = 0; i < rows; i++) {
    matrix[i] = new Array(cols).fill(0); // Initializing with 0
}
console.log(matrix);
```

- This code dynamically initializes a **3x3 array** filled with `0`s.

---

## **How to Create a Jagged Array Dynamically**

- A **jagged array** has variable-length sub-arrays.

```js
let jaggedArray = new Array(3);

for (let i = 0; i < jaggedArray.length; i++) {
    jaggedArray[i] = new Array(i + 1).fill(i + 1); // Rows with increasing size
}

console.log(jaggedArray);
```

- The first row has **1 element**, the second row has **2 elements**, and so on.

---

## **One-Liner Code for Creating a 2D Array**

- We can create a **2D array in a single line** using `Array.from()`.

```js
let matrix = Array.from({ length: 3 }, () => new Array(3).fill(0));
console.log(matrix);
```

- This generates a **3x3 matrix** with all elements initialized to `0`.

### Using Nested Loops
```js
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}
```



Displaying d43.md.