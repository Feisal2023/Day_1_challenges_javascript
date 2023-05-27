/*
Welcome to the Absolute Beginner's Exercise for JavaScript Variables!

In this exercise, we will focus on mastering the fundamentals of variables in JavaScript. Variables are essential building blocks in programming, and having a solid understanding of them is crucial as you progress to more advanced levels of JavaScript.

To complete this exercise, follow the instructions provided for each question and write your solutions below each comment. Don't worry if you encounter any difficulties along the way - remember, this exercise is designed specifically for beginners like you to practice and strengthen your understanding of variables.

Make sure to read each question carefully, and write your solutions using the correct syntax and naming conventions. Test your code by running the JavaScript file and checking the console for the expected output.

Remember, the more you practice, the more confident you will become in working with variables. So, let's dive in and start mastering the basics of JavaScript variables!

Good luck!
*/
// Exercise 1: Declare a variable called 'name' and assign your name to it. Then, log the value of 'name' to the console.
// Your solution here:

const myName = "Feisal";
console.log(myName);
// Exercise 2: Create two variables called 'num1' and 'num2' and assign them any numeric values of your choice. Then, calculate and log the sum of 'num1' and 'num2' to the console.
// Your solution here:
let num1 = 5;
let num2 = 10;
let sumOfNum1AndNum2 = num1 + num2;
console.log(sumOfNum1AndNum2);

// Exercise 3: Declare a variable called 'isRaining' and set its value to 'true' or 'false' depending on the weather. Then, log a message to the console indicating whether it is raining or not.
// Your solution here:
let isRaining = true;
if(isRaining === true) {
  console.log("It is raining");
} else {
  console.log("It is not raining");
}

// Exercise 4: Create a variable called 'myArray' and assign it an array of three elements, such as numbers, strings, or a mix of both. Then, log the entire array to the console.
// Your solution here:

let myArray = [1, 2, 3];
console.log(myArray);
// Exercise 5: Declare a variable called 'message' and assign it an empty string. Then, concatenate the string with your favorite programming language and log the updated 'message' to the console.
// Your solution here:
let message = '';
console.log(message + ' ' + "Javascript");

// Exercise 6: Declare two variables, 'a' and 'b', and assign them any numeric values. Then, swap the values of 'a' and 'b' using a third variable. Log the values of 'a' and 'b' before and after the swap to the console.
// Your solution here:
let a = 3;
let b = 6;
let swap = a;
a = b;
b = swap;
console.log(a);
console.log(b);

// Exercise 7: Declare a variable called 'radius' and assign it a numeric value representing the radius of a circle. Calculate and log the circumference of the circle (2 * pi * radius) and the area of the circle (pi * radius * radius) to the console.
// Your solution here:
let radius = 5;
let pi = 3.142;
let circumferenceOfTheCircle = 2 * radius * pi;
let areaOfTheCircle =  pi * radius * radius;
console.log(circumferenceOfTheCircle);
console.log(areaOfTheCircle);

// Exercise 8: Given three variables, 'x', 'y', and 'z', calculate and log the average of the three numbers to the console.
// Your solution here:
let x = 4;
let y = 6;
let z = 8;
let average = (x + y + z) / 3;
console.log(average);

// Exercise 9: Declare a variable called 'sentence' and assign it a string value. Count the number of characters in the sentence (including spaces) and log the count to the console.
// Your solution here:
let sentence = "world";
let characterCount = sentence.length;
console.log(characterCount);

// Exercise 10: Declare a variable called 'temperature' and assign it a numeric value representing the temperature in Celsius. Convert the temperature to Fahrenheit using the formula (C * 9/5 + 32) and log the converted temperature to the console.
// Your solution here:
let temperatureCelcius = 10;
let temperatureFahrenheit = (temperatureCelcius * 9/5 + 32);
console.log(temperatureFahrenheit);