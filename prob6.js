let day = prompt("Enter a day of the week: ");

let weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday"];

let weekend = ["saturday", "sunday"];

function inWeekdays(weekdays, day) {
    let i = weekdays.length - 1;
    while (i > 0) {
        if (weekdays[i] == day) {
            return console.log(`${day} is a day of the week.`);
        i--;
        } else {
            return console.log(`${day} is not a day of the week.`);
            i--;
        }
    } 
}

console.log(inWeekdays(weekdays, day));