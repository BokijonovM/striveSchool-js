/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

let l1 = parseInt(prompt("WIDTH: "))
let l2 = parseInt(prompt("HEIGHT: "))
let area = (l1, l2)
console.log("Area of rectangle is: " + (l1 * l2))

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

crazySum = (int1, int2)
if(int1 === int3){
    console.log((int1 + sum2) * 3)
}
else{
    console.log(int1 + int2)
}

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

absoluteDifferenceNumber = parseInt(prompt("Enter a number: "))
crazyDiff = (absoluteDifferenceNumber, 19)
if(absoluteDifferenceNumber < 19){
    console.log(19 - absoluteDifferenceNumber)
}
else if(absoluteDifferenceNumber > 19){
    console.log((absoluteDifferenceNumber - 19) * 3)
}
else{
    console.log("It is same number: 19")
}

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

let boundary = (n)
if(n > 20 && n < 100 || n === 400){
    console.log("True")
}
else{
    console.log("False")
}


/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

let strivify = ("Hello I am from Uzbekistan!")
let simpleString = "Strive"
if(strivify.charAt(0, 4) === simpleString){
    console.log(strivify)
}
else{
    console.log("Strive " + strivify)
}

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/


check3and7

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

let reversedString = 'Strive';
let reversed = reversedString.split('').reverse().join('');
console.log(reversed);


/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

let upperFirst = "strive";
console.log(upperFirst.charAt(0).toUpperCase()); // Returns "Strive"

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

let cutString = "Hello My name is Muhsin"
delete cutString[0]
delete cutString.pop
console.log(cutString)

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/


rNumbers = [0,1,2,3,4,5,6,7,8,9,10]
let giveMeRandom = n  
var item = rNumbers[Math.floor(Math.random()*rNumbers.length)];

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/