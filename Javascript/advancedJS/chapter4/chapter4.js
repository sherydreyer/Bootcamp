// let rain = true;
// if (rain) {
//     console.log("** Taking my umbrella when I need to go outside **");
// } else {
//     console.log("** I can leave my umbrella at home **");
// }

// let age = prompt("What is your age?");
// if (age < 18) {
//     alert("We're very sorry, but you can't get in under 18");
// } else {
//     alert("Welcome!");
// }

// let hobby = "dancing";
// if(hobby === "coding"){
// console.log("** I love coding too! **");
// } else {
// console.log("** Can you teach me that? **");
// }

// let age = prompt("What is your age?");
// let cost = 0;
// let message;
// if (age < 3) {
//     cost = 0;
//     message = "Access is free under three.";
// } else if (age < 12) {
//     cost = 5;
//     message = "With the child discount, the fee is 5 dollars";
// } else if (age < 65) {
//     cost = 10;
//     message = "A regular ticket costs 10 dollars.";
// } else {
//     cost = 7;
//     message = "Pensioners: A ticket is 7 dollars.";
// }
// console.log(message);
// console.log("Your Total cost " + cost);

// let age = prompt("What is your age?");
// let access = age < 18 ? "You are denied access!" : "You may enter";
// alert(access);

// let num = Math.floor(Math.random() * 6);
// let question = prompt("Äsk me a question?");
// let message;
// switch (num) {
//     case 0:
//         message = `${question} I don't know!`;
//         break;
//     case 1:
//         message = `${question} Ask me later!`;
//         break;
//     case 2:
//         message = `${question} that's a difficult question!`;
//         break;
//     case 3:
//         message = `${question} Let me think!`;
//         break;
//     case 4:
//         message = `${question} My head is sore. I cannot answer right now!`;
//         break;
//     case 5:
//         message = `${question} Eish?!`;
//         break;
//     case 6:
//         message = `${question} Lets see??????!`;
//         break;
// }

// alert(message);

// let grade = prompt("What grade did you get? A,B,C,D,E or F...").toUpperCase();

// switch (grade) {
//     case "F":
//     case "D":
//     case "E":
//         alert("You failed!");
//         break;
//     case "C":
//     case "B":
//         alert("You passed!");
//         break;
//     case "A":
//         alert("Very good!");
//         break;
//     default:
//         alert("I dont know that grade!");
//         break;

// }

// let num = Number(prompt("Enter a number between 1 and 10"));
// let message = "My selection: ";

// switch (num) {
//     case 1:
//     case 2:
//         message += "Your prize is a Holoiday for two to Mauritius!";
//         break;
//     case 3:
//     case 4:
//         message += "Your prize is R10 000!";
//         break;
//     case 5:
//     case 6:
//         message += "Your prize is a day at the spa!";
//         break;
//     case 6:
//     case 7:
//         message += "Your prize is the Audi!";
//         break;
//     case 8:
//     case 9:
//     case 10:
//         message += "Your prize is a voucher !";
//         break;
//     default:
//         message += "Wrong number! You won nothing";

// }
// alert(message);
let val = 1001;
let check = (val % 2) ? `Odd` : `Even`;
check = `${val} is ${check}`;
console.log(check);

