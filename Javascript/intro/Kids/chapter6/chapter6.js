// let fname = "Nick"; 
// console.log("Hello",fname);

// if (fname.length > 7) {
//     console.log("Wow you have a really long name!");
// }else {
//     console.log("Your name isn't very long");
// }
// let lemonChicken = false;
// let beefWithBlackBean = false;
// let sweetAndSourPork = false;

// if (lemonChicken) {
//     console.log("Great, I'm having lemon chicken");
// } else if (beefWithBlackBean) {
//     console.log("I'm having beef");
// } else if (sweetAndSourPork) {
//     console.log("Ok I'm having Pork ");
// } else {
//     console.log("I guess I'm having rice then");
// }
// let fname = prompt("What is your name?");
// if (fname.toLowerCase() === "sheryl") {
//     alert("Hello me!");
// } else {
//     alert("Hello Stranger");
// }

//loops
//while loop

// let sheepCount = 0;
// while (sheepCount < 10) {
//     alert("I have counted " + sheepCount +  " sheep");
//     sheepCount++;
// }
// alert("zzzzzzzzzzzzzzzzz");

// for (let sheepCount = 0; sheepCount < 10; sheepCount++) {
//     alert("I have counted " + sheepCount + " sheep");
// }
// alert("zzzzzzzzzzzzzzzzz"); 

//  let x= 0,  y = 0,  z = 0;
// for (let i = 0, timesToSayHello = 20; i < timesToSayHello; i++) {
//     console.log("Hello!");
// }

// for (let x = 2; x < 10000 ; x *=2) {
//     console.log(x);
// }
// var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];
// for (let i = 0; i < animals.length; i++) {
//     animals[i] = "awesome " + animals[i]
// }
// console.log(animals);
// let i = 0;
// var randomString = "";
// var alphabet = "abcdefghijklmnopqrstuvwxyz";
// while (i < 10) {
//     randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
//     i++;
// }
// console.log(randomString);
// var input = "javascript is awesome";
// var output = "";
// for (let i = 0; i < input.length; i++) {
//     if (input[i] === "e") {
//         output += "3";
//     } else if (input[i] === "i") {
//         output += "1";
//     } else if (input[i] === "o") {
//         output += "0";
//     } else if (input[i] === "a") {
//         output += "4";
//     } else {
//         output += input[i];
//     }
// }

// console.log(output);
let fname = prompt("What is your name>");
alert("Hello " + fname);
if (fname.length > 7) {
    alert("Wow, you have a REALLY long name!");
} else {
    alert("Your name isn't very long.");
}