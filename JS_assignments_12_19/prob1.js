
// function Type(input) {
//     if (typeof input === "string") {
//         return console.log(`${input} is a string.`);
//     } else if (typeof input === "number") {
//         return console.log(`${input} is a number.`);
//     } else if (typeof input === "boolean") {
//         return console.log(`${input} is a boolean.`);
//     } else if (typeof input === "symbol") {
//         return console.log(`${input} is a symbol.`);
//     } else if (typeof input === "function") {
//         return console.log(`${input} is a function.`);
//     } else if (typeof input === "bigint") {
//         return console.log(`${input} is a BigInt.`);
//     } else if (typeof input === "undefined") {
//         return console.log(`${input} is undefined.`);
//     } else if (input === null) {
//         return console.log(`${input} is null.`);
//     } else if(typeof input === "object")
//         return console.log(`${input} is an object.`);
// }
//
// SYMBOL CONDITIONAL IS NOT WORKING AT ALL, BUT THE OTHER CONDITIONS APPEAR TO BE WORKING AS EXPECTED. 


// testing for object check

const checkType = (value) => typeof value;
