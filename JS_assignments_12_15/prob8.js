// let input = +prompt("Enter a number: ");
// // let input = 10

// for (let i = 0; i <= input; i++) {
//     console.log(`${input} x ${i} = ${input * i}`)
// }

// you can reassign 10 to input if you want to see that output, or you can enter whatever number you want

// looked through class notes, found that there was already a solution that just needed some slight adjustment to work here.


for (let row = 1; row <= 10; row++) {
    console.log("Multiplication table of " + row)
    let result = '';
    for (let col = 1; col <= 10; col++) {
        result += `${row} x ${col} = ${row * col}` + ' | ';
    }
    console.log(result);
}