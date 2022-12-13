let day = prompt("Enter a day of the week: ");

let weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday"];

let weekend = ["saturday", "sunday"];

function inWeekdays(weekdays, day) {
    let i = weekdays.length;
    while (i--) {
        if (weekdays[i] === day) {
            console.log(`${day} is a day of the week.`);
        }
    }
return false; 
}

console.log(inWeekdays("sunday"));