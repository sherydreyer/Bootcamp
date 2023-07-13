// let cat = {
//     legs: 3,
//     "full name": "Harmony Philomena Snuggly-Pants Morgan",
//     color: "Tortoiseshell"
// }

// console.log(cat["full name"]);
// console.log(cat.color);

// let car  = {
//     model: "Audi 1.8",
//     year: 2020,
//     price: 800000
// }

// console.log(Object.values(car));
// console.log(Object.values(cat));
// let cat = {};
// cat["legs"] = 3;
// cat["name"] = "Harmony";
// cat["color"] = "Tortoiseshell";
// console.log(cat);

// let cat2 = {};
// cat2.legs= 4;
// cat2.name = "Whiskers";
// cat2.color = "Grey";
// console.log(cat2);
// let dinosaurs = [
//     { name: "Tyrannosaurus Rex", period: "Late Cretaceous" },
//     { name: "Stegosaurus", period: "Late Jurassic" },
//     { name: "Plateosaurus", period: "Triassic" }
// ];
// console.log(dinosaurs[2]["period"])
// let anna = { name: "Anna", age: 11, luckyNumbers: [2, 4, 8, 16] };
// let dave = { name: "Dave", age: 5, luckyNumbers: [3, 9, 40] };
// let kate = { name: "Kate", age: 9, luckyNumbers: [1, 2, 3] };
// let friends = [anna,dave,kate];
// console.log(friends);
// let owedMoney = {};
// owedMoney["Jimmy"] = 5;
// owedMoney["Anna"] = 7;
// console.log(owedMoney);
// owedMoney.Jimmy += 3;
// console.log(owedMoney.Jimmy);
// var movies = {
//     "Finding Nemo": {
//         releaseDate: 2003,
//         duration: 100,
//         actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
//         format: "DVD"
//     },
//     "Star Wars: Episode VI - Return of the Jedi": {
//         releaseDate: 1983,
//         duration: 134,
//         actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
//         format: "DVD"
//     },
//     "Harry Potter and the Goblet of Fire": {
//         releaseDate: 2005,
//         duration: 157,
//         actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
//         format: "Blu-ray"
//     }
// };
// let findingNemo = movies["Finding Nemo"];
// console.log(findingNemo.duration);
// console.log(findingNemo.format);

// let cars = {
//     releaseDate: 2006,
//     duration: 117,
//     actors: ["Owen Wilson", "Bonnie Hunt", "Paul Newman"],
//     format: "Blu-ray"
//     };

// //movies.Cars = cars;
// movies["Cars" ]= cars;

// console.log(movies);
// console.log(Object.values(movies));

let myCrazyObject = {
    "name": "A ridiculous object",
    "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
    "random animal": "Banana Shark"
};

console.log(myCrazyObject["some array"][2].number);