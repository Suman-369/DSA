
                                    string

## string are immutable in nature
## strings are sequence of characters

## Introduction of String

In JavaScript, a string is a sequence of characters used to represent text. Strings are enclosed in either single quotes ' ', double quotes " ", or backticks `, and they are immutable, meaning once created, their characters cannot be changed.

## methods of string

| `length` | Returns string length |

| `slice(start, end)` | Extracts substring |

| `substring(start, end)` | Similar to `slice`, but no negative indexes |

| `substr(start, length)` | Extracts part of string with length |

| `toUpperCase()` | Converts to uppercase |

| `toLowerCase()` | Converts to lowercase |

| `concat()` | Concatenates strings |

| `trim()` | Removes spaces from both sides |

| `indexOf(substring)` | Returns first index of substring |

| `lastIndexOf(substring)` | Returns last index of substring |

| `includes(substring)` | Checks if substring exists |

| `startsWith(substring)` | Checks if string starts with substring |

| `endsWith(substring)` | Checks if string ends with substring | 

| `replace(old, new)` | Replaces first occurrence of substring |

| `replaceAll(old, new)` | Replaces all occurrences |

| `split(separator)` | Splits string into an array |

| `charAt(index)` | Returns character at index |

| `charCodeAt(index)` | Returns Unicode value of character |

## Q1. Accept a string from user and print each character on a new line

let prompt = require("prompt-sync")();
let str = prompt("Enter a string: ");
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

## Q2. Accept a string and print it in reverse order

let prompt = require("prompt-sync")();
let str = prompt("Enter a string: ");
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log("Reversed string:", reversed);

Displaying Day47.md.
