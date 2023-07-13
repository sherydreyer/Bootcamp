//"use strict";
// function sayHello() {
//     let you = prompt("What's your name? ");
//     console.log("Hello", you + "!");
// }

// sayHello();

// let compliments  = ["your are beautiful","your eyes are lovely"," you dance so well","you are good at everything"];

// getCompliment();

// function getCompliment() {
// let user = prompt("What is your name?");
// let compliment = compliments[Math.floor(Math.random() *compliments.length)];
// alert(`${user} ${compliment}`);
// }

// function calculate(num1, num2, operator) {

//     if (operator === "*") {
//         return num1 * num2;
//     }
//     if (operator === "-") {
//         return num1 - num2;
//     }
//     if (operator === "/") {
//         return num1 / num2;
//     }
//     if (operator === "%") {
//         return num1 % num2;
//     }
//     if (operator === "**") {
//         return num1 ** num2;
//     }
//     return num1 + num2;


//     return num1 + operator + num2;
// }

// alert(calculate(10, 3, "-"));

// function addTwoNumbers(x = 0, y = 0) {
//     return x + y;
// }

// alert(addTwoNumbers(13,12));

//Arrow Functions

// let doingArrowStuff = (x) => console.log(x);

// doingArrowStuff("Great!");

// let sayHi = () => alert("Hi!");

// sayHi();

// const arr = ["squirrel", "alpaca", "buddy"];

// arr.forEach(e=> alert(e));

// let result = arr.find(e => e ==="buddy");
// alert(result);

// let arr = ["so", "much", "fun"];
// let message = ["JavaScript", "is", ...arr, "and", "very",
// "powerful"];

// console.log(message);

// function addTwoNumbers(x = 0, y = 0) {
//     return x + y;
// }
// let arr = [5,9];

// alert(addTwoNumbers(...arr));

// function addFourNumbers (x,y,z,a){
//     console.log(x+y+z+a);
// }

// arr=[5,9];
// arr2=[6,7];

// addFourNumbers(...arr,...arr2);

// function someFunction(param1,param2,...param3) {
//     console.log(param1,param2,param3);

// }

// someFunction("Hi","there","How are you?" );

// function addTwoNumbers(x = 0, y = 0) {
//     return(x + y);
// }

// let result = addTwoNumbers(4, 5);
// console.log(`result is ${result}`);

// let resultArr = [];

// for(let i = 0;i<10;i++) {
//     let result = addTwoNumbers(i,i*2);
//     resultArr.push(result);
// }
// console.log(resultArr);

// let addTwoNumbers = (x = 0, y = 0) =>  {
//     console.log("busy adding");
//      return x + y;
// }
// let resultArr = [];

// for(let i = 0;i<10;i++) {
//     let result = addTwoNumbers(i*5,i*i);
//     resultArr.push(result);
// }
// console.log(resultArr);
// function testAvailability(x) {
//     console.log(`Available here ${x}`);
// }

// testAvailability("Hi!");
// console.log(`not available here ${x}`);
// function testAvailability(x) {
//     let y = "local variable!";
//     console.log(`x is available here ${x}`);
//     console.log(`y is available here ${y}`);
// }

// testAvailability("Hi!");
// console.log(`x is not available here ${x}`);
// console.log(`y is not available here ${y}`);

// function testAvailability(x) {
//     let y = "I'll return!";    
//     console.log(`y is available here ${y}`);
//     console.log(`x is available here ${x}`);
//     return y;
// }

// let a = "hi";
// let z = testAvailability(a);
// console.log(`z is  available here ${z}`);
// console.log(`y is not available here ${y}`);

// let x;
// function doingStuff() { 

//     if(true) {

//          x = "global";
//     }
//     console.log(x);
// }

// doingStuff();
// console.log(x);





// doingStuff();
// function doingStuff() {
//      x = "local";
//     console.log(x);
// }

// console.log(x);

// ((name) =>console.log(name))("Sheryl")

// let val = 1000;

// let val2 = (()=>{
//     let val  = "Sheryl";
//     console.log(`inside function val ${val}`);
//     return val;
// })()


// function getRecursive(nr) {
//     console.log("started function: " + nr);

//     if (nr > 0) {
//         getRecursive(nr - 1);
//     } else {
//         console.log("done with recursion ");
//     }
//     console.log("finished function " + nr);
// }

// getRecursive(3);

// function logRecursive(nr) {
//     console.log("Started function:" + nr);
//     if (nr > 0) {
//         logRecursive(nr - 1);
//     } else {
//         console.log("done with recursion");
//     }
//     console.log("Ended function:" + nr);
// }
// logRecursive(3);

// function calcFactorial(nr) {
//     if (nr ===0) {
//         return 1;
//     } else {
//         return nr * calcFactorial(nr-1);
//     }
// }

// let num = Number(prompt("Give me a number to calculate a factorial for you."));
// let factorial = calcFactorial(num);
// alert(`The factorial of ${num} is ${factorial}`);

// function doOuterFunctionStuff(nr) {
//     console.log("outer function");
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x) {
//         console.log(x + 7);
//         console.log(nr);
//     }
//     console.log(x);
// }

// doOuterFunctionStuff(2);

// let myFunc = function (food) {
//     alert(`I like ${food}`);
// }

//  function myFunc(food) {
//     alert(`I like ${food}`);
// }

// myFunc("chocolate");

// function functionVariable () {
//     console.log("Not so secret though.");
//     };
// function doFlexibleStuff (executeStuff) {
//     executeStuff();
// }

// // doFlexibleStuff(functionVariable);

// function sayHi () {
//     alert("Hi there!");
// }

// doFlexibleStuff(function() {alert("Hi there again and again!")});

// function youGotThis() {
//     console.log("You're doing really well, keep coding!");
// };

// setInterval(youGotThis,2000)
let testFunction = function () {
    console.log("Hello");
}();
