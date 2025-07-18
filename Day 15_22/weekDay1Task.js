// Also called Iterators(Loop)

/*Problem 5:Multiplication Table: Write a function generateMultiplicationTable that takes a number n as input. The function should use a loop to print the multiplication table 
for n (from 1 to 10) to the console. For example, if n is 5:
*/
function generateTable(n) {
for (let i=1; i<=10; i++){
    console.log(n +'*'+ i + '='+ n*i);
}
}
generateTable(5);
 

/*problem 4:Greeting Function: Write a function called greetUser that takes one argument, name. The function should return a string like "Hello, [name]! Welcome."
 Call this function with your name and console.log() the result.
*/
function greetUser(name){
    return `"Hello, ${name}! Welcome."`;
}
let me= greetUser("Bismah");
console.log(me);

/*Problem 3:Even or Odd Loop: Write a for loop that iterates from 1 to 20. For 
each number, console.log() whether it's "Even" or "Odd".*/

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + " is Even");
    } else {
        console.log(i + " is Odd");
    }
}
 
/*Problem 2:Age Checker: Ask the user for their age using 
prompt(). If the age is 18 or older, log "You are an adult." to the console. Otherwise, log "You are a minor."
*/

let age = prompt("Enter your age:");
age = Number(age);   //prompt always returns string so i am converting it to number
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

/*Problem 1:Variable Swapper: Declare two variables, a and b, 
and assign them any numerical values. Write code to swap their values without using a temporary third variable (think about arithmetic operations). 
Then console.log() their new values*/

let a = 5;
let b = 8;
console.log("Before swap: a =", a, ", b =", b);
[a, b] = [b, a];
console.log("After swap: a =", a, ", b =", b);