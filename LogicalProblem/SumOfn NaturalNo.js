let n = parseInt(prompt("Enter a number to find the sum of first n natural numbers:"));

if (isNaN(n) || n < 1) {
    console.log("Please enter a valid positive number.");
} else {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    console.log("The sum of the first " + n + " natural numbers is: " + sum);
}
