// const someConstant = 3;
// someConstant = 4;  // should get error

//let funActivity = "Let's learn JavaScript";
//let funActivity = 'Let\'s learn JavaScript';
//let question

// let language = "JavaScript";
// let message = `Let's learn ${language}`;
// console.log(message);

// let language = "JavaScript";
// let message = "Let's learn" + language;
// console.log(message);

// let str3 = "New \nline";
// console.log(str3);
// console.log("I am containing a : \"");
// let intNr = 1;
// let bigNr = 90071992547409920n;
// let result = intNr + bigNr;

// let str1 = "JavaScript is fun!";
// let str2 = "JavaScript is fun!";
// console.log("These two strings are the same:", str1 === str2);
// let sym1 = Symbol("JavaScript is fun!");
// let sym2 = Symbol("JavaScript is fun!");
// console.log("These two Symbols are the same:", sym1 === sym2);

// let str = "Hello";
// let nr = 7;
// let bigNr = 12345678901234n;
// let bool = true;
// let sym = Symbol("unique");
// let undef = undefined;
// let unknown = null;
// console.log("str", typeof str);
// console.log("nr", typeof nr);
// console.log("bigNr", typeof bigNr);
// console.log("bool", typeof bool);
// console.log("sym", typeof sym);
// console.log("undef", typeof undef);
// console.log("unknown", typeof unknown);

// let nr1 = 2;
// let nr2 = "2";
// console.log(nr1 * nr2);

// let nrToStr = 6;
// nrToStr = String(nrToStr);
// console.log(nrToStr, typeof nrToStr);

// let strToNr = "hello";
// strToNr = Number(strToNr);
// console.log(strToNr, typeof strToNr );

// let strToBool2 = 1;
// strToBool2 = Boolean(strToBool2);
// console.log(strToBool2, typeof strToBool2);

// let str1 = 'Laurence';
// let str2 = "Svekis";
// let val1 = undefined;
// let val2 = null;
// let myNum = 1000;

// console.log(str1, typeof str1);
// console.log(str2, typeof str2);
// console.log(val1, typeof val1);
// console.log(val2, typeof val2);
// console.log(myNum, typeof myNum);

// let fname = "Sheryl";
// let age = 53;
// codeJS = true;

// alert(`Hello, my name is ${fname}, I am ${age} years old , and I can code in Javascript: ${codeJS}`);

// let nr1 = 20;
// let nr2 = 4;
// let str1 = "hio";
// let nr3 = 3;
// let result1 = nr1 - nr2;
// let result2 = str1 - nr3;
// console.log(result1, result2);

// let nr1 = 15;
// let nr2 = 10;
// let str1 = "12";
// let nr3 = 3;
// let result1 = nr1 * nr2;
// let result2 = str1 * nr3;
// console.log(result1, result2);

// let nr1 = 2;
// let nr2 = 3;
// let result1 = nr1 ** nr2;
// console.log(result1);

// let nr1 = 10;
// let nr2 = 3;
// let result1 = nr1 % nr2;
// console.log(`${nr1} % ${nr2} = ${result1}`);
// let nr1 = 4;
// nr1++;
// console.log(nr1);
 //let nr1 = 4;
 
// console.log(nr1++ + nr1++);
// console.log(nr1);

// console.log(++nr1 + ++nr1);
// console.log(nr1);

//Practice exercise 2.3

// alert("Enter the sizes of the sides of a right angle triangle and I will calculate the hypotenuse for you!");
// let a = Number(prompt("what is the size of the one side?"));
// let b = Number(prompt("what is the size of the second side?"));
// let cSquared = (a ** 2) + (b ** 2);
// let c = Math.sqrt(cSquared);
// alert(`the hypoteniuse is ${c}`);

// let a = 2;
// let b = 4;
// let c = 6;
// a  += b;
// a /= c;
// c %= b;

// console.log(a,b,c);


// let a = "Hello";
// a = prompt("world");
// console.log(a);

let firstNum = 5;
let secondNum = 10;
firstNum++;
secondNum--;
let total = ++firstNum + secondNum;
console.log(total);
let total2 = 500 + 100 / 5 + total--;
console.log(total2);

console.log(true ||false);