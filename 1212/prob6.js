// let day = prompt("Enter a day of the week: ");

// let weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday"];

// let weekend = ["saturday", "sunday"];

// function inWeekdays(weekdays, day) {
//     let i = weekdays.length - 1;
//     while (i > 0) {
//         if (weekdays[i] == day) {
//             return console.log(`${day} is a day of the week.`);
//         i--;
//         } else {
//             return console.log(`${day} is not a day of the week.`);
//             i--;
//         }
//     } 
// }

// console.log(inWeekdays(weekdays, day));

const day = prompt("Enter a day of the week: ");

switch (day.toLowerCase()) {
    case "monday":
        console.log(`${day} is a weekday.`);
        break;
    case "tuesday":
        console.log(`${day} is a weekday.`);
        break;
    case "wednesday":
        console.log(`${day} is a weekday.`);
        break;
    case "thursday":
        console.log(`${day} is a weekday.`);
        break;    
    case "friday":
        console.log(`${day} is a weekday.`);
        break;
    case "saturday":
        console.log(`${day} is not a weekday.`);
        break;
    case "sunday":
        console.log(`${day} is not a weekday.`);
        break;
    default:
        console.log(`${day} is not a day.`);
        break;
}