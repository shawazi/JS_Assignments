function identityMatrix(n) {
    // code here that creates and then returns an n row by n column identity matrix.

    // Thanks, GPT.

//     let matrix = "";
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             if (i === j) {
//                 matrix += " 1";
//             } else {
//                 matrix += " 0";
//             }
//         }
//         matrix += "\n";
//     }
//     return matrix;
// }

// let matrix = identityMatrix(50);
// console.log(matrix)

    let matrix = "";
    /// uhhh

    for (let row = 0; row <= n; row++) {
        console.log(`Row`);
        for (let col = 0; col <= n; col++) {
            console.log(`Column`)
        }
    }
}
console.log(identityMatrix(4));


// tried to adjust the multiplication table from earlier assignments hw, but i'm not sure how to adjust it properly, it's not working