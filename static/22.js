/* Exercise 1 - Gues The Number */

// Write a Javacript program to generate a random number and store it in a variable.The program then takes an input from the user to tell them whether the guess was correct, greater or lesser than the original number.
/*  100 - (no of guesses) is the score of the user The program is  expected to terminate once the number is guessd. Number should be between 1 - 100.*/
alert("This is a Guessing Game and you have 10 chances to guess the lucky number")
let chances = 10
let luckyNumber = Math.floor(Math.random() * 100) + 1
let i = 0
for (i; i < chances; i++) {
    let number = prompt("Guess The Lucky Number to Win")
    if (number == luckyNumber) {
        alert("You have won the lottery!")
        break;
    }
    else if (number<luckyNumber){
        alert("Guess a Bigger Number")
    }
    else if (number>luckyNumber){
        alert("Guess a Smaller Number")
    }
}
if (i == 10) {
    alert("You have run out of chances!")
}
alert(`Your Score is ${10 - i}/10`)
alert('Thanks for Playing')
