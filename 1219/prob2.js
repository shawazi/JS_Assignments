// function divisors(integer) {

//     var result = [];
//     for(let i = 2; i < integer; i++) {
//       if(integer % i == 0) {
//         result.push(i)
//       }
//     }
//      return result;
//     };



// function Perfect(int) {
//     let result = [];    
//     for (let i = 1; i <= 1000; i++) {
//         for (let j = 2; j < int; j++) {
//             if (int % j == 0) {

//             }
//                 return j;
//         }
//     }
// }



// const perfectNums = () => {
//   for (let i = 1; i <= 1000; i++) {
//     let divisors = 0;
//     for (let j = i - 1; j > 0; j--) {
//       if (i % j === 0) {
//         divisors += j
//       }
//     }
//   }
//   if (divisors === i) {
//     console.log(i + " is a perfect number!");
//   }
// }

// perfectNums();

const checkPerfectNumber = (num) => {
  let sum = 1;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) sum += i;
  }
  if (n === sum && n !== 1) return true
  else return false
}

console.log(checkPerfectNumber(6))
console.log(checkPerfectNumber(10))
console.log(checkPerfectNumber(28))
