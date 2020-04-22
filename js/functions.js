"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

// function sayHello(name) {
//     var message = "Hello, " + name + "!";
//     return message;
// }


function sayHello(name) {
    return "Hello, " + name + "!";
}




/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

// console.log(sayHello("Julia"));
// console.log(sayHello("Alex"));
// console.log(sayHello("Peter"));



//
// var helloMessage = sayHello("Julia");
//
// console.log(helloMessage);




var helloMessage = sayHello('Julia Contreras');
console.log(helloMessage, 'Hello, Julia Contreras');

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */



var myName = "Julia" ;

console.log(sayHello(myName));









// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);






/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

function isTwo(number) {
    if (number === 2) {
        return true;
    } else {
        return false;
    }
}


// function isTwo(number){
//     return number === 2;
// }


console.log(random);
console.log(isTwo(random));












/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calculateTip(tipPercent , totalBill) {
    return (tipPercent * totalBill);
}


console.log( calculateTip(0.20, 20)) // returns 4
console.log( calculateTip(0.25, 25.50)) // returns 6.37
console.log( calculateTip(0.15, 33.42)) // returns 5.013



/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */






// var userTipPercentage = prompt('What percentage would you like to tip?');
// var userBillTotalPrompt = prompt('What is your bill total?');
//
// var userTipAmount = calculateTip( userTipPercentage , userBillTotalPrompt);
//
//
// alert("The dollar amount you should tip is: $ " + userTipAmount);






alert("Welcome to the calculate tip app!");

var bill = Number(prompt("What is your total bill?"));
var tip = Number(prompt("How  much would you like to tip? (enter 1-100 for the percent value)"));


var tipPercentage = tip / 100 ;

console.log(typeof bill);
console.log (typeof tip);

alert("You will need to tip $" + calculateTip((tipPercentage, bill)))

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */


function applyDiscount(price, discount) {
    return price - (price * discount);
}

console.log(applyDiscount(45.99,0.12));


































//
// // "use strict";
//
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Create a function named `analyzeColor` that accepts a string that is a color
//  * name as input. This function should return a message that related to that
//  * color. Only worry about the colors defined below, if the color passed is not
//  * one of the ones defined below, return a message that says so
//  *
//  * Example:
//  *  > analyzeColor('blue') // returns "blue is the color of the sky"
//  *  > analyzeColor('red') // returns "Strawberries are red"
//  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//  *
//  * You should use an if-else-if-else block to return different messages.
//  *
//  * Test your function by passing various string literals to it and
//  * console.logging the function's return value
//  */
//
//
// // var color = blue true
// // var color = red
// // var color =cyan
// //
// // function analyzeColor(colorInput) {
// //     if (colorInput === 'blue') {
// //         return "blue is the color of the sky";
// //     } else if (colorInput === 'red') {
// //         return "Strawberries are red";
// //     } else if (colorInput === 'cyan') {
// //         return "I don't know anything about cyan"
// //     } else {
// //         return "Not quite.";
// //     }
// // }
// //
// //
// // console.log(analyzeColor(blue));
// // console.log(analyzeColor(red));
// // console.log(analyzeColor(cyan));
//
//
//
//
//
// // Don't change the next two lines!
// // These lines create two variables for you:
// // - `colors`: a list of the colors of the rainbow
// // // - `randomColor`: contains a single random color value from the list (this
// // //                  will contain a different color every time the page loads)
// // var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// // var randomColor = colors[Math.floor(Math.random() * colors.length)];
//
//
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */
//
//
//
//
// //
// // console.log(randomColor);
// // console.log(analyzeColor(randomColor));
//
//
// /**
//  * TODO:
//  * Refactor your above function to use a switch-case statement
//  */
//
// //
// // var col= prompt("What is your favorite color?").toLowerCase();
// //
// // switch(color) {
// //     case "blue":
// //         console.log("blue is the color of the sky");
// //         break;
// //     case "red":
// //         console.log("Strawberries are red");
// //         break;
// //     case "cyan":
// //         console.log("I don't know anything about cyan");
// //         break;
// //     default:
// //         console.log(color + " nope.");
// //         break;
// }
//
//
//
//
//
// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */
//
// /* ########################################################################## */
// //
// // var color = prompt("What is your favorite color?").toLowerCase();
//
//
//
//
// /**
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * all for free!.
//  *
//  * Write a function named `calculateTotal` that accepts a lucky number and total
//  * amount, and returns the discounted price.
//  *
//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */
//
//
//
//
//
//
//
//
//
// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 6.
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
// // Generate a random number between 0 and 6
// // var luckyNumber = Math.floor(Math.random() * 6);
//
//
//
//
//
//
// /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * if what the user enters is not a number, use an alert to tell them that, and
//  * do *not* display any of the above information.
//  *
//  * Can you refactor your code to use functions?
//  * HINT: The way we prompt for a value could be improved
//  */