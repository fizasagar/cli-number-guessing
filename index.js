#! /usr/bin/eno node
import inquirer from "inquirer";
// 1) Computer will generate a random number
const randomNumber = Math.floor(Math.random() * 6 + 1);
// 2) User input for guesing number
const result = await inquirer.prompt([
    {
        name: "guessing game",
        type: "number",
        message: "please guess a number between 1 to 6",
    }
]);
// 3) Compare user input with computer generated number and show result
if (result.guessingGame === randomNumber) {
    console.log("congratulations you guess a right number");
}
else {
    console.log("you guessed a wrong number, Try Again.");
}
