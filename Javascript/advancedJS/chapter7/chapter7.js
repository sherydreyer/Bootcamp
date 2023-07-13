"use strict";



class Dog {
    dogName;
    weight;
    color;
    breed;
    constructor(dogName, weight, color, breed) {
        this.dogName = dogName;
        this.weight = weight;
        this.color = color;
        this.breed = breed;
    }
}

// let dog1 = new Dog("Ketana","20kg","black","pitbull");
// let dog2 = new Dog("Nala","5kg","brown","Pekingese");

// console.log(`The dog's name is ${dog1.dogName} and her color is ${dog1.color}`);
// console.log(`The other dog's name is ${dog2.dogName} and her color is ${dog2.color}`);

// class Person {
//     #firstname;
//     #lastname;
//     constructor(firstname, lastname = "Doe") {         
//             this.#firstname = firstname;          
//             this.#lastname = lastname;      
//     }
//     greet() {
//         console.log(`Hello, my name is ${this.firstname}`)
//     }

//     compliment(name, object) {
//         console.log(`That's a wonderful ${object}, ${name} From ${this.firstname}`);
//     }
//     fullName() {
//         return this.firstname + " " + this.lastname;
//     }

//     get firstname() {
//         return this.#firstname;
//     }
//     set firstname(firstname) {
//         this.#firstname = firstname;
//     }
//     get lastname() {
//         return this.#lastname;
//     }
//     set lastname(lastname) {
//         this.#lastname = lastname;
//     }
// }

// Person.prototype.introduce = function () {console.log(`Hi, I am ${this.firstname}`)};
// Person.prototype.favoriteColor = "green";
// let person1 = new Person("Joe","Deer"); 
// person1.introduce();
// console.log(`${person1.firstname} has a favorite color of ${person1.favoriteColor}`);

// let person = new Person("Maaike", "van Putten");
// console.log(person.firstname, person.lastname);

// let friend1 = new Person("Merisha", "Naidoo");
// let friend2 = new Person("Bianca", "Jones");
// friend1.lastname = "Pillay";
// console.log(`Hello ${friend1.firstname}`);
// console.log(`Hello ${friend2.firstname}`);

// friend1.greet();
// friend2.greet();
// friend2.compliment("Sizwe", "car");
// friend1.compliment("Sizwe", "table in the car");
// console.log(friend1.fullName());

// class Vehicle {
//     color;
//     currentSpeed;
//     maxSpeed;
//     constructor(color,currentSpeed,maxSpeed) {
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
//     }
//     move() {
//         console.log("moving at", this.currentSpeed);
//         }
//     accelerate(amount) {
//         this.currentSpeed += amount;
//     }
// }

// class Motorcycle extends Vehicle{
//     constructor(color,currentSpeed,maxSpeed,fuel) {
//         super(color,currentSpeed,maxSpeed);
//         this.fuel = fuel;
//     }

//     doWheelie () {
//         console.log("Driving on one wheel");
//     }
// }

// let motorC = new Motorcycle("red",100,120,"diesel");
// console.log(motorC.color);
// motorC.move();
// motorC.accelerate(10);
// motorC.move();

class Animal {
    species;
    sound;
    constructor(species, sound) {
        this.species = species;
        this.sound = sound;
    }

    makeNoise() {
        console.log(`${this.species} can ${this.sound}`);
    }
}

Animal.prototype.eat = function (food) {
    console.log(`${this.species} is eating ${food}`);
};

let cat1 = new Animal("cat","meouw");
let dog1 = new Animal("dog","bark");

cat1.makeNoise();
dog1.makeNoise();
cat1.eat("catfood");
dog1.eat("meat treats");
console.log(cat1);
console.log(dog1);


