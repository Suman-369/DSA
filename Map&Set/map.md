

## Map in JavaScript:-
Map is a built-in object that holds key-value pairs.
Unlike regular objects, a Map can have keys of any type (not just strings or symbols).

Map remembers the original insertion order of the keys.

It has better performance for frequently adding/removing key-value pairs compared to plain objects.

let map = new Map();
map.set(key, value);
map.get(key);
map.has(key);
map.delete(key);
map.size;
map.clear();

Example:
let myMap = new Map();

// Adding values
myMap.set('name', 'Alice');
myMap.set('age', 25);
myMap.set(true, 'booleanKey');

// Accessing values
console.log(myMap.get('name'));  // Output: Alice
console.log(myMap.get(true));    // Output: booleanKey

// Checking existence
console.log(myMap.has('age'));   // Output: true

// Iterating over Map
myMap.forEach((value, key) => {
    console.log(`${key} => ${value}`);
});

// Size of Map
console.log(myMap.size);  // Output: 3




