// let dinosaurs = [
//     "T-Rex",
//     "Velociraptor",
//     "Stegosaurus",
//     "Triceratops",
//     "Brachiosaurus",
//     "Pteranodon",
//     "Apatosaurus",
//     "Diplodocus",
//     "Compsognathus"
//     ];
// console.log(dinosaurs[0]);
// console.log(dinosaurs[dinosaurs.length-1]);
// console.log(dinosaurs.indexOf("Diplodocus"));
// console.log(dinosaurs);
// dinosaurs[0] = "Tyrannosaurus Rex";
// console.log(dinosaurs);
// let subjects = [];
// subjects[0] = "Biology";
// subjects[1] = "Science";
// subjects[2] = "Mathematics"
// console.log(subjects);
// var dinosaurs = [];
// dinosaurs[0] = "T-Rex";
// dinosaurs[1] = "Velociraptor";
// dinosaurs[2] = "Stegosaurus";
// dinosaurs[3] = "Triceratops";
// dinosaurs[4] = "Brachiosaurus";
// dinosaurs[5] = "Pteranodon";
// dinosaurs[6] = "Apatosaurus";
// dinosaurs[7] = "Diplodocus";
// dinosaurs[8] = "Compsognathus";
// dinosaurs[33] = "Philosoraptor";
// console.log(dinosaurs);
// var dinosaursAndNumbers = [3, "dinosaurs", ["triceratops", 
// "stegosaurus", 3627.5], 10];
// console.log(dinosaursAndNumbers[dinosaursAndNumbers.length-1]);
// let maniacs = ["Yakko","Wakko","Dot"];
// console.log(maniacs[0]);
// console.log(maniacs[1]);
// console.log(maniacs[2]);
// console.log(maniacs.length);
// console.log(maniacs[maniacs.length-1]);
// let animals = [];
// animals.push("Cat");
// console.log(animals);
// animals.push("Dog");
// console.log(animals);
// animals.push("Llama");
// console.log(animals);
// animals.unshift("Monkey");
// console.log(animals);
// let numberOfAnimals = animals.unshift("Polar Bear");
// console.log("there are ",numberOfAnimals, "animals in my array");
// let lastAnimal = animals.pop();
// console.log(animals);
// console.log(lastAnimal);
// let firstAnimal = animals.shift();
// console.log(animals);
// console.log(firstAnimal);
// let furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"];
// console.log(furryAnimals);
// let scalyAnimals = ["Boa Constrictor", "Godzilla"];
// console.log(scalyAnimals);
// let featheredAnimals = ["Macaw", "Dodo"];
// console.log(featheredAnimals);
// let allAnimals = furryAnimals.concat(scalyAnimals,featheredAnimals);
// console.log(furryAnimals);
// console.log(scalyAnimals);
// console.log(featheredAnimals);
// console.log(allAnimals);
// let colors = [
//     "red",
//     "green",
//     "blue"
// ]

 

// console.log(colors.indexOf("blue"));
// console.log(colors[2]);
// console.log(colors.indexOf("purple"));
// var insects = ["Bee", "Ant", "Bee", "Ant" ,"Bee"];
// console.log(insects.indexOf("Bee",3));
// var boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"];
// let stringBoringAnimals = boringAnimals.join(" ");
// //let stringBoringAnimals2 = boringAnimals[0] + " " + boringAnimals[1] + " " + boringAnimals[2] + " " + boringAnimals[3];
// console.log(stringBoringAnimals);
// var landmarks = [];
// landmarks.push("My house");
// landmarks.push("Front path");
// landmarks.push("Flickering streetlamp");
// landmarks.push("Leaky fire hydrant");
// landmarks.push("Fire station");
// landmarks.push("Cat rescue center");
// landmarks.push("My old school");
// landmarks.push("My friend's house");
// console.log(landmarks);
 
// console.log(landmarks.pop());
// console.log(landmarks.pop());
// console.log(landmarks.pop());
// console.log(landmarks.pop());
// console.log(landmarks.pop());
// console.log(landmarks.pop());
// console.log(landmarks.pop());
// console.log(landmarks.pop());
// console.log(landmarks);
// console.log(Math.floor(Math.random()*4));
// let randomWords = ["Explosion", "Cave", "Princess", "Pen","chocolate","sweet","house"];// 
// console.log(randomWords[Math.floor(Math.random() * randomWords.length)]);

// let games = ["Monopoly","Thirty Seconds","Scrabble","Dominoes"];
// randomIndex = Math.floor(Math.random() * games.length);
// console.log(games[randomIndex]);

let randomBodyParts = ["Face", "Nose", "Hair","Mouth","Belly"];
let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)]; 

let randomAdjectives = ["Smelly", "Boring", "Stupid","Funny","Dirty","Crazy"];
let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];

let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat",'Bear',"Cochroach"];
let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

// Join all the random strings into a sentence:
//let randomInsult = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";
let randomInsult = ["Your",randomBodyPart,"is like a", randomAdjective,randomWord + "!!!"].join(" ");

console.log(randomInsult);

let numbers = [3,2,1];
console.log(numbers.join(" is bigger than "));

 
 

