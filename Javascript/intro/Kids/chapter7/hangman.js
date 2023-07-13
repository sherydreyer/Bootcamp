let words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
]

let word = words[Math.floor(Math.random() * words.length)];
let answerArray = [];

for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remainingLetters = word.length;
let guess;
let noOfGuesses = word.length;
while (remainingLetters > 0 && noOfGuesses > 0) {
    alert(answerArray.join(" "));
    alert("number of guesses remaining: " + noOfGuesses);
    guess = prompt("Guess a letter, or click Cancel to stop playing");
    if (guess === null) {
        break;
    } else if (guess.length > 1) {
        alert("Please enter a single letter");
    } else {
        //check to see if they guessed correctly
        guess = guess.toLowerCase();
        noOfGuesses--;
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                if (answerArray[j] === "_") {
                    answerArray[j] = guess;
                    remainingLetters--;
                } else {
                    alert("You have already guessed this letter!");
                }
            }
        }
    }
}

if (guess === null) {
    alert("You quit");
} else if (noOfGuesses === 0 && remainingLetters > 0) {
    alert("You ran out of guesses!")
} else {
    alert("Congratulations!")
}

