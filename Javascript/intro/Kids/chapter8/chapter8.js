// let ourFirstFunction = function() {
//     alert("Hello World!");
// }

// ourFirstFunction();

// function ourFirstFunction() {
//     alert("Hello World!");
// }

// ourFirstFunction();

// function sayHello(name) {
//     console.log("Hello ", name)

// }

// sayHello("SUE");

// alert("finished");

// function drawCats(howManyTimes,whatToDraw) {
//     for (let i =0;i<howManyTimes;i++) {
//         console.log(i, whatToDraw);
//     }

// }

// drawCats(3,"0.0");

function double(number) {
    return number * 2;
}

// let answer = double(8) + double(10);
// console.log(answer);

//console.log(double(double(3)))

// function add(num1, num2) {
//     return num1 + num2;
// }

// console.log("the sum is: ", add(500, 800));


// function cars(m, c) {
//     let car = { "model": m, "color": c }
//     return car;
// }

// let myCar = cars("AUDI 1.8","black");
// alert(myCar.model);



// let randomWords = ["Planet", "Worm", "Flower", "Computer"];
// let word =  pickRandomWord(randomWords);
// console.log(word);



// let randomBodyParts = ["Face", "Nose", "Hair"];
// let randomAdjectives = ["Smelly", "Boring", "Stupid"];
// let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
// // Pick a random body part from the randomBodyParts array:
// let randomBodyPart = pickRandomWord(randomBodyParts);
// // Pick a random adjective from the randomAdjectives array:
// let randomAdjective = pickRandomWord(randomAdjectives);
// // Pick a random word from the randomWords array:
// let randomWord = pickRandomWord(randomWords);
// // Join all the random strings into a sentence:
// let randomString = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";
// console.log(randomString);

// function pickRandomWord(words) {
//     return words[Math.floor(Math.random() * words.length)]
// }
// function fifthLetter(name) {
//     if (name.length < 5) {
//         return "Your name is too short" ;
//     }
//     return "the fifth letter of your name is " + name[4];
// }

// let userName = prompt("What is your name?");
// alert(fifthLetter(userName));

// function areArraysSame (array1, array2) {
//     if (array1.length !== array2.length) {
//         return false;
//     }
//     for(let i = 0;i < array1.length;i++) {
//         if (array1[i] !== array2[i]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(areArraysSame([1,2,3],[4,5,6]));

// console.log(areArraysSame([1,2,3],[1,2,3]));

// console.log(areArraysSame([1,2,3],[1,2,3,4]));

//***HANGMAN****
let words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
]

let word = pickWord();

let answerArray = [];
setupAnswerArray();

let remainingLetters = word.length;
let guess;
let noOfGuesses = word.length;
while (remainingLetters > 0 && noOfGuesses > 0) {
    showPlayerProgress();
    alert("number of guesses remaining: " + noOfGuesses);
    guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length > 1) {
        alert("Please enter a single letter");
    } else {
        updateGameState();
    }
}
showAnswerAndCongratulatePlayer();


function pickWord() {
    // Return a random word
    return words[Math.floor(Math.random() * words.length)];
};

function setupAnswerArray() {
    // Return the answer array
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
};

function showPlayerProgress() {
    // Use alert to show the player their progress
    alert(answerArray.join(" "));
};

function getGuess() {
    // Use prompt to get a guess
    return prompt("Guess a letter, or click Cancel to stop playing");
};

function updateGameState() {
    // Update answerArray and return a number showing how many
    // times the guess appears in the word so remainingLetters
    // can be updated
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
};

function showAnswerAndCongratulatePlayer() {
    if (guess === null) {
        alert("You quit " + " The answer is " + word);
    } else if (noOfGuesses === 0 && remainingLetters > 0) {
        alert("You ran out of guesses!" + " The answer is " + word);
    } else {
        alert("Congratulations!")
    }
};
