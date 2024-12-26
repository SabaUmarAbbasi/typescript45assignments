"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//• Tests for equality and inequality with strings
console.log("Equality test with  string: ", "Apple" === "Apple");
// Inequality Test
console.log("Inequality test with string: ", "Apple" != "Orange");
//• Tests using the lower case function
console.log("Lower case function test: ", "HELLO".toLowerCase() === "hello");
//• Numerical tests involving equality and inequality,
console.log("Equality test with number: ", 26 === 26);
console.log("Inequality test with number: ", 26 != 30);
// greater than and less than, greater than or equal to, and less than or equal to
console.log("Greater than test: ", 10 > 5);
console.log("Less than test: ", 5 < 10);
console.log("Greater than and equal to test: ", 10 >= 10);
console.log("less than and equal to test: ", 5 <= 10);
//• Tests using "and" and "or" operators
console.log("And operator test: ", 5 === 5 && 10 > 5);
console.log("Or operator test: ", 5 === 5 || 10 < 100);
//• Test whether an item is in a array
const fruit = ['Apple', 'Banana', 'Mango'];
console.log('Test "Apple" in the Array: ', fruit.includes("Apple"));
//• Test whether an item is not in a array
let fruits = ['apple', 'banana', 'mango'];
console.log('Test "Orange" not in the Array: ', !fruits.includes("Orange"));
//• Tests using "and" and "or" operators
