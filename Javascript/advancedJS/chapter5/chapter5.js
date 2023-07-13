// let i = 1;
// let x = 3;
// while (i < 1000) {
//     alert(i);
//     i = i * 3;
// }

// for(let i = 1 ;i < 100;i *= 3 ) {
//     console.log(i); 
// }

// let nr1 = 0;
// let nr2 = 1;
// let temp;
// fibonacciArray = [];
// while (fibonacciArray.length < 25) {
//     fibonacciArray.push(nr1);
//     temp = nr1 + nr2;
//     nr1 = nr2;
//     nr2 = temp;
// }
// console.log(fibonacciArray);

// let inCorrect = true;
// let secret = Math.floor(Math.random() * 10 + 1); 
// while (inCorrect) {
//     guess = Number(prompt("Guess a number between between 1 and 10"));
//     if (guess === secret) {
//         alert("Correct@");
//         inCorrect = false;
//     } else if (guess < secret) {
//         alert("too low")
//     } else {
//         alert("too high")
//     }

// }

// let inCorrect = true;
// let secret = Math.floor(Math.random() * 10 + 1); 

// do {
//     guess = Number(prompt("Guess a number between between 1 and 10"));
//     if (guess === secret) {
//         alert("Correct!");
//         inCorrect = false;
//     } else if (guess < secret) {
//         alert("too low")
//     } else {
//         alert("too high")
//     }
// } while(inCorrect)S

// let arr = [];
// for (let i = 0; i < 100; i +=2) {
//     arr.push(i);
// }

// console.log(arr);

// let myWork = [];
// let lesson;
// for (let i = 1; i < 11; i++) {
//     lesson = {};
//     lesson.name = `Lesson ${i}`;
//     lesson.status = i % 2 ? true : false;
//     myWork.push(lesson);
// }

// console.log(myWork);
// let arrOfArrays = [];
// for (let i = 0; i < 3; i++) {
//     arrOfArrays.push([]);
//     for (let j = 0; j < 7; j++) {
//         arrOfArrays[i].push(j);
//     }
// }

// let myTable = [];
// let rows = 5;
// let cols = 5;
// let temp;
// let counter = 1;
// for (let i = 0; i < rows; i++) {
//     temp = [];
//     for (let x = 0; x < cols; x++) {
//         //alert(counter);
//         temp.push(counter);
//         counter++;
//     }
//    // alert ("pushing");
//     myTable.push(temp);
// }

// console.log(myTable);

// let myTable = [];
// let temp = [];
// for (let count = 1; count < 65;  count++) {
//     temp.push(count); 
//     if (count % 8 === 0) {
//         myTable.push(temp);
//         temp = [];
//     }

// }

// console.log(myTable);

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let n of names) {
//     console.log(n);
// }

// let numbers = [];

// for(let i = 0; i<10 ; i++){
// numbers.push(i);
// }
// console.log(numbers);

// console.log("normal for loop");
// for(let x = 0; x < numbers.length;x++) {
//     console.log(numbers[x]);
// }


// console.log("for of loop");
// for(let e of numbers) {
// console.log(e)
// }

// let car = {
//     model: "Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "black",
// };

// for(let prop in car) {
//     console.log(car[prop]);
// }

// for( let key in dog) {
//     console.log(key, dog[key]);
//     ;
// }

// for( let key in dog) {
//     console.log(key, dog[key]);
//     ;
// }
// let array = ["Bruno","Brown"];

// for( let key in array) {
//     console.log(key, array[key]);
//     ;
// }

// let dog = {
//     name: "Bruno",
//     color: "Brown"
// }

// for (let entry of Object.entries(dog)) {
//     console.log(entry);
// }

// let output = "";
// let num = Number(prompt("Where number must I skip between 1 and 10?"));
// for (let i = 0;i< 10;i++) {

//     if (i === num) {
//         continue;
//         //break;
//     }
//     output += i;

// }

// alert(output);
let groups = [
    ["Martin", "Daniel", "Keith"],
    ["Margot", "Marina", "Ali"],
    ["Helen", "Jonah", "Sambikos"],
];

// for (let i = 0; i < groups.length; i++) {
//     let matches = 0;
//     for (let j = 0; j < groups[i].length; j++) {
//         if (groups[i][j].startsWith("M")) {
//             matches++;
//         } else {
//             continue;
//         }
//         if (matches === 2) {
//             console.log("Found a group with two names starting with an M:");
//             console.log(groups[i]);
//             break;
//         }
//     }
// }
// outer:
// for (let group of groups) {
//     inner:
//     for (let member of group) {
//         if (member.startsWith("M")) {
//             console.log("found one starting with M:", member);
//             break outer;
//         }
//     }
// }
let step = 3;
for (let i = 0; i < 1000; i += step) {
    if (i > 10) {
        break;
    }
    console.log(i);
}
