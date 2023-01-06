// function removeFirstOccurrence(string, search) {
//     let result = "";
//     let found = false;
//     for (let i = 0; i < string.length; i++) {
//       if (!found && string[i] === search[0]) {
//         found = true;
//         for (let j = 1; j < search.length; j++) {
//           if (string[i + j] !== search[j]) {
//             found = false;
//             break;
//           }
//         }
//       }
//       if (!found) {
//         result += string[i];
//       }
//     }
//     return result;
//   }



// function removefirst(string, search) {
//     let array = string.split(" ");
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] == search) {
//             array.splice(array[i])
//         }
//     }
//     console.log(array);
// }


function removefirst(string, search) {
    str = str.replace(word + " " , "");
}

const str = "the";
const test = "Full stack developers handle both the frontend and backend of an app or a website. It even needs to have knowledge about the database.";

console.log(removefirst(test, str));

