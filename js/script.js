// Our (re)introduction to javascript.

// 1. What is a variable? 
let myVarible = "Some information"; // a string
let myNumber = 100;

// 2. Conditional Statements
if(myNumber > 50) {
    console.log("wow you have a big number!"); // Will this execute?
}

// 3. Looping
for(let i = 0; i < myNumber; i++) {
    console.log(i); // This execute 100 times!
}

// 4. Functions
console.log("The sum of 10 + 20 is equal to " + sum(10, 20));
console.log("The sum of 60 + 10 is equal to " + sum(60, 10));
console.log("The sum of 600 + 2204 is equal to " + sum(600, 2204));


function sum(a, b) {
    return a + b;
}