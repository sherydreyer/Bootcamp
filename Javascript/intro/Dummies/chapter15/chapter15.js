


let todayDate = document.getElementById("todaysdate");
let todoButton = document.getElementById("whattodo");
let thingToDo = document.getElementById("whattodo");

// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);

// create a new Date object
var d = new Date();
d.setDate(15);

// call the displayDate() function
displayDate();

function displayDate() {
    // todo: display the current date in the todaysdate div
    todayDate.innerHTML = d.toDateString();;
}

function displayActivity() {
    // todo: find out the day of the week.
    let toDo;
    switch (d.getDay()) {
        case 1:
            toDo = "eat pasta";
            break;
        case 2:
            toDo = "eat burgers";
            break;
        case 3:
            toDo = "eat out";
            break;
        case 4:
            toDo = "take aways";
            break;
        case 5:
            toDo = "fast";
            break;
        case 6:
            toDo = "braai";
            break;
        case 7:
            toDo = "eat roast";
            break;
        default:
            toDo = "don't know this day";
            break;

    }

 

    // todo: output the value of youShould into the thingToDo div
    thingToDo.innerHTML = toDo;
}
