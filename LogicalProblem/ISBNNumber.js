function isValidISBN(isbn) {
    if (isbn.length !== 10) return false;

    let sum = 0;

    for (let i = 0; i < 10; i++) {
        let digit = Number(isbn[i]);
        if (isNaN(digit)) return false;

        sum += digit * (10 - i); // Using 10 to 1 weight
    }

    return sum % 11 === 0;
}

// Get input from user
let isbn = prompt("Enter a 10-digit ISBN number:");

if (isValidISBN(isbn)) {
    console.log("Yes, this is a valid ISBN number");
} else {
    console.log("No, this is not a valid ISBN number");
}


//Output if u use "0306406152" this Number as a Input Then the Output Will be "Yes, this is a valid ISBN number".
